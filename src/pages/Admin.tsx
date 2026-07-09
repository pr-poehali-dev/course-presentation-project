import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const PRODUCTS_URL = 'https://functions.poehali.dev/c2b3e09f-639b-44fd-b5dd-5a91d0706a03';
const IMPORT_URL = 'https://functions.poehali.dev/0471b6d9-d7c0-4f38-9af4-1f2504c2d006';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

const categoryNames: Record<string, string> = {
  fabrics: 'Ткани',
  curtains: 'Портьерные',
  tulle: 'Тюлевые',
  furniture: 'Мебельные',
  home: 'Домашний текстиль',
  accessories: 'Фурнитура',
};

const Admin = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [uploadingId, setUploadingId] = useState<number | null>(null);
  const excelInputRef = useRef<HTMLInputElement>(null);
  const photoInputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(PRODUCTS_URL);
      const data = await res.json();
      setProducts(data.products || []);
    } catch {
      toast({ title: 'Ошибка загрузки', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleExcelUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImporting(true);
    try {
      const base64 = await fileToBase64(file);
      const res = await fetch(IMPORT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file_data: base64 }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: 'Импорт завершён', description: `Добавлено товаров: ${data.imported}` });
        await loadProducts();
      } else {
        toast({ title: 'Ошибка импорта', description: data.error, variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Ошибка импорта', variant: 'destructive' });
    } finally {
      setImporting(false);
      if (excelInputRef.current) excelInputRef.current.value = '';
    }
  };

  const handlePhotoUpload = async (productId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingId(productId);
    try {
      const base64 = await fileToBase64(file);
      const uploadRes = await fetch(PRODUCTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'upload_image', image_data: base64, content_type: file.type }),
      });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok || !uploadData.image_url) {
        throw new Error('upload failed');
      }
      const updateRes = await fetch(PRODUCTS_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: productId, image: uploadData.image_url }),
      });
      if (updateRes.ok) {
        toast({ title: 'Фото добавлено' });
        await loadProducts();
      }
    } catch {
      toast({ title: 'Ошибка загрузки фото', variant: 'destructive' });
    } finally {
      setUploadingId(null);
    }
  };

  const handleDelete = async (productId: number) => {
    try {
      await fetch(`${PRODUCTS_URL}?id=${productId}`, { method: 'DELETE' });
      toast({ title: 'Товар удалён' });
      await loadProducts();
    } catch {
      toast({ title: 'Ошибка удаления', variant: 'destructive' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Управление каталогом</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Загрузите Excel-файл с товарами, затем добавьте фото к каждому товару
          </p>

          <div className="bg-accent/20 rounded-sm p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="FileSpreadsheet" size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Шаг 1. Загрузите Excel</h2>
                <p className="text-muted-foreground mb-1">
                  Формат столбцов: <strong>Название | Категория | Цена | Описание</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Категории: Ткани, Портьерные, Тюлевые, Мебельные, Домашний текстиль, Фурнитура
                </p>
              </div>
            </div>
            <input
              ref={excelInputRef}
              type="file"
              accept=".xlsx,.xls"
              onChange={handleExcelUpload}
              className="hidden"
            />
            <Button onClick={() => excelInputRef.current?.click()} disabled={importing} size="lg">
              <Icon name="Upload" size={20} className="mr-2" />
              {importing ? 'Загрузка...' : 'Выбрать Excel-файл'}
            </Button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Шаг 2. Товары ({products.length})</h2>
            <Button variant="outline" size="sm" onClick={loadProducts} disabled={loading}>
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Обновить
            </Button>
          </div>

          {loading ? (
            <p className="text-muted-foreground">Загрузка...</p>
          ) : products.length === 0 ? (
            <p className="text-muted-foreground">Товаров пока нет. Загрузите Excel-файл выше.</p>
          ) : (
            <div className="grid gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-card border border-border rounded-sm p-4"
                >
                  <div className="w-20 h-20 bg-accent/30 rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <Icon name="ImageOff" size={24} className="text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {categoryNames[product.category] || product.category} · {product.price}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">{product.description}</p>
                  </div>
                  <input
                    ref={(el) => (photoInputRefs.current[product.id] = el)}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(product.id, e)}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => photoInputRefs.current[product.id]?.click()}
                    disabled={uploadingId === product.id}
                  >
                    <Icon name="Image" size={16} className="mr-2" />
                    {uploadingId === product.id ? 'Загрузка...' : product.image ? 'Заменить фото' : 'Добавить фото'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Admin;