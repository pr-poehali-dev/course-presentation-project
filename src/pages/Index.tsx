import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const features = [
    {
      icon: 'Sparkles',
      title: 'Портьерные и тюлевые ткани',
      description: 'Изысканные ткани для создания идеальных штор',
    },
    {
      icon: 'Home',
      title: 'Домашний текстиль',
      description: 'Стильные решения для уютного интерьера',
    },
    {
      icon: 'Sofa',
      title: 'Мебельные ткани',
      description: 'Практичные и износостойкие материалы',
    },
    {
      icon: 'Scissors',
      title: 'Фурнитура',
      description: 'Всё необходимое для завершения проекта',
    },
  ];

  const collections = [
    {
      title: 'Элегантные кружева',
      image: 'https://cdn.poehali.dev/files/photo_2_2025-12-27_23-53-49.jpg',
    },
    {
      title: 'Сияющие пайетки',
      image: 'https://cdn.poehali.dev/files/photo_3_2025-12-27_23-53-49.jpg',
    },
    {
      title: 'Изысканная вышивка',
      image: 'https://cdn.poehali.dev/files/photo_4_2025-12-27_23-53-49.jpg',
    },
    {
      title: 'Драгоценные детали',
      image: 'https://cdn.poehali.dev/files/photo_1_2025-12-27_23-53-49.jpg',
    },
    {
      title: 'Блестящее кружево',
      image: 'https://cdn.poehali.dev/files/photo_5_2025-12-27_23-53-49.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/ed7c2865-918b-4983-b279-4ab032332947.jpg"
            alt="Премиальные ткани"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Добро пожаловать в Exooo Ткани
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed drop-shadow-md">
              Магазин, где легко найти материал для любой идеи и настроения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://shuman.b-catalog.ru/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8">
                  Посмотреть каталог
                </Button>
              </a>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/055d7148-ee75-48b0-b37c-4cd8e5daf8f3.jpg"
            alt="Textile fabrics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ткани, которые шьют с удовольствием
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              У нас собрана коллекция на любой вкус: от нежных повседневных тканей 
              до выразительных фактур для особенных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-sm text-center hover:shadow-xl hover:bg-white/95 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/4575948b-04ca-445c-aee5-81c4af3c310a.jpg"
            alt="Collections background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши коллекции
            </h2>
            <p className="text-lg text-muted-foreground">
              Изысканные материалы для воплощения ваших идей
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="group cursor-pointer overflow-hidden rounded-sm"
                onClick={() => setSelectedImage(collection.image)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {collection.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/files/a33b7556bd329cb620a50f60044effb2.jpg"
            alt="Premium fabrics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Место, где вдохновение превращается в готовое изделие
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Для дома, интерьера, мастерской и любимого творчества
          </p>
          <a href="https://shuman.b-catalog.ru/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Начать выбирать ткани
            </Button>
          </a>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Полное изображение"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">Exooo Ткани</h3>
              <p className="text-muted-foreground">
                Ткани, которые шьют с удовольствием
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="flex flex-col gap-2">
                <Link to="/catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Каталог
                </Link>
                <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Галерея
                </Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                Связаться с нами
              </Link>
            </div>
          </div>
          <div className="text-center mt-12 text-muted-foreground">
            © 2024 Exooo Ткани. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;