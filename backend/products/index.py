import json
import os
import base64
import uuid
import psycopg2
import boto3


def get_db_connection():
    return psycopg2.connect(os.environ['DATABASE_URL'])


def upload_image_to_s3(base64_data: str, content_type: str) -> str:
    """Загружает изображение в S3 и возвращает CDN URL"""
    if ',' in base64_data:
        base64_data = base64_data.split(',')[1]
    
    file_data = base64.b64decode(base64_data)
    
    ext = 'jpg'
    if 'png' in content_type:
        ext = 'png'
    elif 'webp' in content_type:
        ext = 'webp'
    
    key = f"products/{uuid.uuid4()}.{ext}"
    
    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )
    s3.put_object(Bucket='files', Key=key, Body=file_data, ContentType=content_type)
    
    return f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"


def handler(event: dict, context) -> dict:
    """Управление товарами каталога: получение, создание, удаление, загрузка фото"""
    method = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': '', 'isBase64Encoded': False}

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        if method == 'GET':
            cur.execute("SELECT id, name, category, price, description, image_url FROM products ORDER BY created_at DESC")
            rows = cur.fetchall()
            products = [
                {'id': r[0], 'name': r[1], 'category': r[2], 'price': r[3], 'description': r[4], 'image': r[5]}
                for r in rows
            ]
            return {
                'statusCode': 200,
                'headers': {**cors_headers, 'Content-Type': 'application/json'},
                'body': json.dumps({'products': products}),
                'isBase64Encoded': False
            }

        if method == 'POST':
            body = json.loads(event.get('body', '{}'))
            action = body.get('action', 'create')

            if action == 'upload_image':
                image_data = body.get('image_data', '')
                content_type = body.get('content_type', 'image/jpeg')
                if not image_data:
                    return {'statusCode': 400, 'headers': {**cors_headers, 'Content-Type': 'application/json'}, 'body': json.dumps({'error': 'Нет данных изображения'}), 'isBase64Encoded': False}
                image_url = upload_image_to_s3(image_data, content_type)
                return {'statusCode': 200, 'headers': {**cors_headers, 'Content-Type': 'application/json'}, 'body': json.dumps({'image_url': image_url}), 'isBase64Encoded': False}

            name = body.get('name', '')
            category = body.get('category', 'curtains')
            price = body.get('price', '')
            description = body.get('description', '')
            image = body.get('image', '')

            if not name:
                return {'statusCode': 400, 'headers': {**cors_headers, 'Content-Type': 'application/json'}, 'body': json.dumps({'error': 'Название обязательно'}), 'isBase64Encoded': False}

            name_esc = name.replace("'", "''")
            category_esc = category.replace("'", "''")
            price_esc = price.replace("'", "''")
            description_esc = description.replace("'", "''")
            image_esc = image.replace("'", "''")

            cur.execute(
                f"INSERT INTO products (name, category, price, description, image_url) VALUES ('{name_esc}', '{category_esc}', '{price_esc}', '{description_esc}', '{image_esc}') RETURNING id"
            )
            new_id = cur.fetchone()[0]
            conn.commit()
            return {'statusCode': 200, 'headers': {**cors_headers, 'Content-Type': 'application/json'}, 'body': json.dumps({'success': True, 'id': new_id}), 'isBase64Encoded': False}

        if method == 'PUT':
            body = json.loads(event.get('body', '{}'))
            product_id = int(body.get('id', 0))
            image = body.get('image', '')
            image_esc = image.replace("'", "''")
            cur.execute(f"UPDATE products SET image_url = '{image_esc}', updated_at = CURRENT_TIMESTAMP WHERE id = {product_id}")
            conn.commit()
            return {'statusCode': 200, 'headers': {**cors_headers, 'Content-Type': 'application/json'}, 'body': json.dumps({'success': True}), 'isBase64Encoded': False}

        if method == 'DELETE':
            params = event.get('queryStringParameters') or {}
            product_id = int(params.get('id', 0))
            cur.execute(f"DELETE FROM products WHERE id = {product_id}")
            conn.commit()
            return {'statusCode': 200, 'headers': {**cors_headers, 'Content-Type': 'application/json'}, 'body': json.dumps({'success': True}), 'isBase64Encoded': False}

        return {'statusCode': 405, 'headers': {**cors_headers, 'Content-Type': 'application/json'}, 'body': json.dumps({'error': 'Method not allowed'}), 'isBase64Encoded': False}

    finally:
        cur.close()
        conn.close()
