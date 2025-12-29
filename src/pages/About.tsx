import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const About = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    text: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, rating });
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', role: '', text: '' });
      setRating(0);
      setIsSubmitted(false);
    }, 3000);
  };

  const values = [
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Работаем только с проверенными поставщиками премиальных тканей',
    },
    {
      icon: 'Heart',
      title: 'Вдохновение',
      description: 'Помогаем найти материал для воплощения любой творческой идеи',
    },
    {
      icon: 'Users',
      title: 'Экспертность',
      description: 'Наша команда всегда готова дать профессиональную консультацию',
    },
    {
      icon: 'Zap',
      title: 'Удобство',
      description: 'Быстрая доставка и удобные условия работы для каждого клиента',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Дизайнер интерьеров',
      text: 'Exooo Ткани — мой любимый поставщик. Качество материалов безупречное, а выбор впечатляет. Консультанты помогают подобрать ткани под любой проект.',
      rating: 5,
    },
    {
      name: 'Михаил Соколов',
      role: 'Владелец швейной мастерской',
      text: 'Работаю с Exooo больше года. Цены адекватные, качество стабильное, доставка быстрая. Особенно радует ассортимент мебельных тканей и фурнитуры.',
      rating: 5,
    },
    {
      name: 'Елена Волкова',
      role: 'Частный клиент',
      text: 'Шью для себя и семьи. В Exooo всегда нахожу красивые ткани по разумной цене. Продавцы помогли выбрать материал для штор — получилось идеально!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/4575948b-04ca-445c-aee5-81c4af3c310a.jpg"
            alt="About header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">О нас</h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            История Exooo Ткани — это любовь к качественным материалам и творчеству
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Exooo Ткани — ткани, которые шьют с удовольствием
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Exooo Ткани — магазин, созданный портным из Египта, который с детства учился ремеслу у своего отца и мечтал открыть собственное место с лучшими тканями. Сегодня мы помогаем выбирать материалы для одежды и интерьера: ткани на любой вкус, шторы, домашний текстиль, мебельные ткани и фурнитура — всё, чтобы шить с удовольствием.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              У нас собрана коллекция на любой вкус: от нежных повседневных тканей до
              выразительных фактур для особенных проектов. Выбирайте портьерные и
              тюлевые ткани для штор, стильный домашний текстиль, практичные и
              износостойкие мебельные ткани, а также фурнитуру — всё, что нужно, чтобы
              задумка получилась аккуратной, красивой и долговечной.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6"></p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/d0a78d6f-04e4-41bf-8ec1-07500b659773.jpg"
            alt="Values background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/5"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-white/80 backdrop-blur-sm p-8 rounded-sm text-center hover:bg-white/95 transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon name={value.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-accent/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Отзывы наших клиентов</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Нам доверяют профессионалы и любители шитья
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-sm shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Оставьте свой отзыв</h3>
            {isSubmitted ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={64} className="mx-auto mb-4 text-green-500" />
                <p className="text-lg font-semibold mb-2">Спасибо за ваш отзыв!</p>
                <p className="text-muted-foreground">Ваше мнение очень важно для нас</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Род деятельности (опционально)</label>
                  <Input
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Дизайнер, швея, частный клиент..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Оценка</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Icon
                          name="Star"
                          size={32}
                          className={`${
                            star <= (hoverRating || rating)
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ваш отзыв</label>
                  <Textarea
                    required
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    placeholder="Расскажите о вашем опыте работы с нами..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={rating === 0}>
                  Отправить отзыв
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary text-primary-foreground p-12 rounded-sm text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать свой проект?</h2>
            <p className="text-xl mb-8 opacity-90">
              Посетите наш каталог или свяжитесь с нами для консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" variant="secondary">
                  Посмотреть каталог
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
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

export default About;