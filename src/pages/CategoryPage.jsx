import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { getArticlesByCategory, articles } from '../utils/data';
import { pendoIds } from '../utils/pendo';

const CategoryPage = () => {
  const { category } = useParams();
  
  // Get articles for this category, fallback to first 4 articles if category has no specific articles
  let categoryArticles = getArticlesByCategory(category);
  if (categoryArticles.length === 0) {
    categoryArticles = articles.slice(0, 8);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Category Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          {category}
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Welcome to the {category.toLowerCase()} section of our news website where we explore the latest trends and developments. We are committed to providing comprehensive coverage of current events and analysis that inform and educate our readers.
        </p>
      </header>

      {/* Articles Grid */}
      <section>
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                pendoId={pendoIds.articleLink(article.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No articles found in this category yet. Check back soon for updates!
            </p>
          </div>
        )}
      </section>

      {/* Load More Section */}
      {categoryArticles.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:bg-primary/90 transition-colors">
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;