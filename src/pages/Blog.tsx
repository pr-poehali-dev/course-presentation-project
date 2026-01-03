import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать ткань для штор: полное руководство',
      excerpt: 'Шторы — важный элемент интерьера. Узнайте, какие ткани подходят для разных комнат и как правильно рассчитать количество материала.',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/4575948b-04ca-445c-aee5-81c4af3c310a.jpg',
      category: 'Советы',
      date: '15 декабря 2024',
      readTime: '5 мин',
    },
    {
      id: 2,
      title: 'Уход за мебельными тканями: правила и секреты',
      excerpt: 'Правильный уход продлевает жизнь мебели. Разбираем, как чистить разные типы обивочных тканей и избежать распространённых ошибок.',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/d0a78d6f-04e4-41bf-8ec1-07500b659773.jpg',
      category: 'Уход',
      date: '10 декабря 2024',
      readTime: '7 мин',
    },
    {
      id: 3,
      title: 'Натуральные vs синтетические ткани: что выбрать?',
      excerpt: 'Разбираем плюсы и минусы натуральных и синтетических материалов. Когда стоит выбрать хлопок, а когда — полиэстер.',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/4575948b-04ca-445c-aee5-81c4af3c310a.jpg',
      category: 'Материалы',
      date: '5 декабря 2024',
      readTime: '6 мин',
    },
    {
      id: 4,
      title: 'Тренды в текстиле 2024: цвета, фактуры, принты',
      excerpt: 'Какие ткани и расцветки в моде в этом сезоне? Обзор актуальных трендов для одежды и интерьерного текстиля.',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/d0a78d6f-04e4-41bf-8ec1-07500b659773.jpg',
      category: 'Тренды',
      date: '1 декабря 2024',
      readTime: '8 мин',
    },
    {
      id: 5,
      title: 'Как ухаживать за шёлком и деликатными тканями',
      excerpt: 'Шёлк, атлас, органза требуют особого подхода. Узнайте правила стирки, глажки и хранения деликатных материалов.',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/4575948b-04ca-445c-aee5-81c4af3c310a.jpg',
      category: 'Уход',
      date: '25 ноября 2024',
      readTime: '5 мин',
    },
    {
      id: 6,
      title: 'Какие ткани подходят для пошива летней одежды',
      excerpt: 'Лёгкие, дышащие материалы для жаркой погоды. Обзор лучших тканей для летних платьев, рубашек и костюмов.',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/d0a78d6f-04e4-41bf-8ec1-07500b659773.jpg',
      category: 'Советы',
      date: '20 ноября 2024',
      readTime: '6 мин',
    },
  ];

  const categories = ['Все статьи', 'Советы', 'Уход', 'Материалы', 'Тренды'];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/4575948b-04ca-445c-aee5-81c4af3c310a.jpg"
            alt="Blog header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Блог</h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Полезные статьи о тканях, уходе за материалами и трендах в текстиле
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all ${
                  category === 'Все статьи'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                    Читать далее
                    <Icon name="ArrowRight" size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Mail" size={48} className="mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на нашу рассылку</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Получайте полезные советы о тканях, новости о поступлениях и специальные предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
