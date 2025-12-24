import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/dc66a218-e2f5-4d39-9065-778e43855a9c.jpg',
      title: 'Премиальные портьеры',
      category: 'Портьеры',
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/e40164bf-7970-4c05-9faf-2a8775f5dd69.jpg',
      title: 'Интерьерный текстиль',
      category: 'Домашний текстиль',
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/c67920cf-4348-4963-b505-73d39b58d4da.jpg',
      title: 'Мебельные коллекции',
      category: 'Мебельные ткани',
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/dc66a218-e2f5-4d39-9065-778e43855a9c.jpg',
      title: 'Велюр и бархат',
      category: 'Портьеры',
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/e40164bf-7970-4c05-9faf-2a8775f5dd69.jpg',
      title: 'Натуральный шелк',
      category: 'Портьеры',
    },
    {
      id: 6,
      url: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/c67920cf-4348-4963-b505-73d39b58d4da.jpg',
      title: 'Тюлевые ткани',
      category: 'Тюль',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/682c04ea-921a-403e-ab3b-262a87f7ac88.jpg"
            alt="Gallery header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Галерея</h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Вдохновляющие примеры использования наших тканей в интерьере
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-sm cursor-pointer aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-white/80 mb-1">{image.category}</span>
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Просмотр"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/055d7148-ee75-48b0-b37c-4cd8e5daf8f3.jpg"
            alt="Inspiration background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/88 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-6">Воплотите свои идеи</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Наши ткани помогают создавать уникальные интерьеры и проекты
          </p>
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

export default Gallery;