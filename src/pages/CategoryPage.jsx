import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { getArticlesByCategory, articles } from '../utils/data';
import { pendoIds } from '../utils/pendo';

const CategoryPage = () => {
  const { category } = useParams();
  
  // Get articles for this category, fallback to first 4 articles if category has no specific articles
  let categoryArticles = getArticlesByCategory(category);
  if (categoryArticles.length === 0) {
    categoryArticles = articles.slice(0, 4);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {category} Category
        </h1>
        <p className="text-lg text-muted-foreground">
          Latest news and updates from {category.toLowerCase()}
        </p>
      </header>

      {/* Category Description */}
      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <p className="text-card-foreground">
          Stay informed with the latest developments in {category.toLowerCase()}. 
          Our expert journalists bring you comprehensive coverage, analysis, and insights 
          on the stories that matter most in this field.
        </p>
      </div>

      {/* Articles Grid */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Articles</h2>
        
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;