import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const PRODUCTS_URL = 'https://functions.poehali.dev/c2b3e09f-639b-44fd-b5dd-5a91d0706a03';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'Все ткани' },
    { id: 'curtains', name: 'Портьерные ткани' },
    { id: 'tulle', name: 'Тюлевые ткани' },
    { id: 'furniture', name: 'Мебельные ткани' },
    { id: 'home', name: 'Домашний текстиль' },
    { id: 'accessories', name: 'Фурнитура' },
  ];

  const placeholderImage =
    'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/dc66a218-e2f5-4d39-9065-778e43855a9c.jpg';

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/682c04ea-921a-403e-ab3b-262a87f7ac88.jpg"
            alt="Catalog header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Каталог тканей
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Изысканная коллекция тканей для любых интерьерных решений
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground py-12">Загрузка каталога...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              В этой категории пока нет товаров
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-sm overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={product.image || placeholderImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold">{product.price}</span>
                      <Button>
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Заказать
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/055d7148-ee75-48b0-b37c-4cd8e5daf8f3.jpg"
            alt="Consultation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Icon name="Phone" size={48} className="mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Наши специалисты помогут подобрать идеальную ткань для вашего проекта
          </p>
          <Button size="lg">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          © 2024 Exooo Ткани. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Catalog;