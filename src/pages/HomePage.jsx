import ArticleCard from '../components/ArticleCard';
import { getHeroArticle, getTrendingArticles, articles } from '../utils/data';
import { pendoIds } from '../utils/pendo';

const HomePage = () => {
  const heroArticle = getHeroArticle();
  const trendingArticles = getTrendingArticles();
  const gridArticles = articles.slice(3, 7); // Articles 4-7 for the grid

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Announcement Banner */}
      <div 
        className="bg-accent border border-accent-border rounded-lg p-4 mb-8"
        data-pendo="tech-category-announcement"
      >
        <div className="flex items-center justify-center">
          <span className="text-accent-foreground font-medium">
            🚀 New category coming soon: Technology
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {/* Hero Article */}
          {heroArticle && (
            <section className="mb-8">
              <ArticleCard 
                article={heroArticle}
                pendoId={pendoIds.heroArticleLink}
                isHero={true}
                className="w-full"
              />
            </section>
          )}

          {/* Article Grid */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  pendoId={pendoIds.articleLink(article.id)}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Trending Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold text-card-foreground mb-4">Trending</h2>
            <div className="space-y-4">
              {trendingArticles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  data-pendo={pendoIds.trendingArticleLink(index)}
                  className="block group"
                >
                  <article className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <h3 className="font-semibold text-sm text-card-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground space-x-2">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.publishedAt}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Import Link from react-router-dom
import { Link } from 'react-router-dom';

export default HomePage;