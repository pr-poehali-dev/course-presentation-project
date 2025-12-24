import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все ткани' },
    { id: 'curtains', name: 'Портьерные ткани' },
    { id: 'tulle', name: 'Тюлевые ткани' },
    { id: 'furniture', name: 'Мебельные ткани' },
    { id: 'home', name: 'Домашний текстиль' },
    { id: 'accessories', name: 'Фурнитура' },
  ];

  const products = [
    {
      id: 1,
      name: 'Велюр премиум',
      category: 'curtains',
      price: 'от 2 500 ₽/м',
      description: 'Роскошный велюр для портьер',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/dc66a218-e2f5-4d39-9065-778e43855a9c.jpg',
    },
    {
      id: 2,
      name: 'Шелк натуральный',
      category: 'curtains',
      price: 'от 3 800 ₽/м',
      description: 'Изысканный натуральный шелк',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/e40164bf-7970-4c05-9faf-2a8775f5dd69.jpg',
    },
    {
      id: 3,
      name: 'Органза с вышивкой',
      category: 'tulle',
      price: 'от 1 800 ₽/м',
      description: 'Легкая органза с узором',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/c67920cf-4348-4963-b505-73d39b58d4da.jpg',
    },
    {
      id: 4,
      name: 'Жаккард мебельный',
      category: 'furniture',
      price: 'от 2 200 ₽/м',
      description: 'Износостойкий жаккард',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/dc66a218-e2f5-4d39-9065-778e43855a9c.jpg',
    },
    {
      id: 5,
      name: 'Лен интерьерный',
      category: 'home',
      price: 'от 1 400 ₽/м',
      description: 'Натуральный лен для дома',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/e40164bf-7970-4c05-9faf-2a8775f5dd69.jpg',
    },
    {
      id: 6,
      name: 'Бархат коллекция',
      category: 'curtains',
      price: 'от 3 200 ₽/м',
      description: 'Премиальный бархат',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/c67920cf-4348-4963-b505-73d39b58d4da.jpg',
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-12 px-6 bg-accent/20">
        <div className="container mx-auto">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-sm overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
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
        </div>
      </section>

      <section className="py-20 px-6 bg-accent/20">
        <div className="container mx-auto max-w-4xl text-center">
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
