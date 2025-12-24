import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Exooo Ткани — это место, где вдохновение превращается в готовое изделие:
              для дома, интерьера, мастерской и любимого творчества.
            </p>
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
          <div className="absolute inset-0 bg-white/88 backdrop-blur-[2px]"></div>
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