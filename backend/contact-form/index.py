import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Обработка формы обратной связи и отправка SMS-уведомления"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }

    body = json.loads(event.get('body', '{}'))
    
    name = body.get('name', '')
    phone = body.get('phone', '')
    message = body.get('message', '')

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Имя и телефон обязательны'}),
            'isBase64Encoded': False
        }

    sms_api_key = os.environ.get('SMS_API_KEY')
    target_phone = '79787190002'

    if sms_api_key:
        sms_text = f"Новая заявка с сайта!\nИмя: {name}\nТелефон: {phone}\nСообщение: {message[:50]}"
        
        params = urllib.parse.urlencode({
            'api_id': sms_api_key,
            'to': target_phone,
            'msg': sms_text,
            'json': 1
        })
        
        try:
            url = f'https://sms.ru/sms/send?{params}'
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req, timeout=10) as response:
                result = json.loads(response.read().decode('utf-8'))
                
                if result.get('status') != 'OK':
                    print(f"SMS send error: {result}")
        except Exception as e:
            print(f"SMS send failed: {e}")

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.'
        }),
        'isBase64Encoded': False
    }
