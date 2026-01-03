import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  const article = {
    title: 'Как выбрать ткань для штор: полное руководство',
    category: 'Советы',
    date: '15 декабря 2024',
    readTime: '5 мин',
    image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/4575948b-04ca-445c-aee5-81c4af3c310a.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Выбор ткани для штор — важный этап в создании уютного интерьера. Правильно подобранные шторы не только защищают от солнца и посторонних взглядов, но и становятся стильным акцентом в комнате.',
      },
      {
        type: 'heading',
        text: 'Типы тканей для штор',
      },
      {
        type: 'paragraph',
        text: 'Существует несколько основных типов тканей, каждый из которых подходит для разных задач:',
      },
      {
        type: 'list',
        items: [
          'Портьерные ткани — плотные материалы, которые хорошо затемняют помещение',
          'Тюль и органза — лёгкие прозрачные ткани для создания воздушности',
          'Блэкаут — специальные светонепроницаемые ткани для спален',
          'Димаут — частично затемняющие ткани, пропускающие рассеянный свет',
        ],
      },
      {
        type: 'heading',
        text: 'Выбор ткани по комнатам',
      },
      {
        type: 'paragraph',
        text: 'Для гостиной подойдут плотные портьерные ткани с красивой драпировкой. В спальне лучше использовать блэкаут для комфортного сна. На кухне практичнее лёгкие ткани, которые легко стирать.',
      },
      {
        type: 'heading',
        text: 'Как рассчитать количество ткани',
      },
      {
        type: 'paragraph',
        text: 'Для стандартных штор умножьте ширину окна на коэффициент сборки (обычно 1.5-2.5). К высоте добавьте 20-30 см на подгибы. Наши консультанты всегда помогут с точными расчётами.',
      },
      {
        type: 'paragraph',
        text: 'Приходите в Exooo Ткани — мы поможем подобрать идеальную ткань для ваших штор с учётом всех особенностей интерьера!',
      },
    ],
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Уход за мебельными тканями',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/d0a78d6f-04e4-41bf-8ec1-07500b659773.jpg',
    },
    {
      id: 3,
      title: 'Натуральные vs синтетические ткани',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/4575948b-04ca-445c-aee5-81c4af3c310a.jpg',
    },
    {
      id: 4,
      title: 'Тренды в текстиле 2024',
      image: 'https://cdn.poehali.dev/projects/a5effef7-dda4-4ae7-afee-f504e635df80/files/d0a78d6f-04e4-41bf-8ec1-07500b659773.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <article className="pt-24 pb-12">
        <div className="container mx-auto max-w-4xl px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <Icon name="ArrowLeft" size={20} />
            Вернуться к блогу
          </Link>

          <div className="mb-6">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Clock" size={18} />
                {article.readTime}
              </span>
            </div>
          </div>

          <div className="relative h-96 mb-12 rounded-sm overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'list' && block.items) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-lg text-muted-foreground">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Поделиться:</span>
              <div className="flex gap-3">
                <button className="p-2 bg-accent hover:bg-accent/80 rounded-full transition-colors">
                  <Icon name="Share2" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 px-6 bg-accent/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Читайте также</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
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
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
