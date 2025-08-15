import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { getHeroArticle, getTrendingArticles, articles } from '../utils/data';
import { pendoIds } from '../utils/pendo';

const HomePage = () => {
  const heroArticle = getHeroArticle();
  const trendingArticles = getTrendingArticles();
  const gridArticles = articles.slice(3, 7); // Articles 4-7 for the grid

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column - smaller articles */}
        <div className="lg:col-span-3 space-y-6">
          {gridArticles.slice(0, 2).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              pendoId={pendoIds.articleLink(article.id)}
            />
          ))}
        </div>

        {/* Center column - Hero article */}
        <div className="lg:col-span-6">
          {heroArticle && (
            <ArticleCard 
              article={heroArticle}
              pendoId={pendoIds.heroArticleLink}
              isHero={true}
              className="w-full"
            />
          )}
        </div>

        {/* Right column - more smaller articles */}
        <div className="lg:col-span-3 space-y-6">
          {gridArticles.slice(2, 4).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              pendoId={pendoIds.articleLink(article.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom row - additional articles */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        {trendingArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            pendoId={pendoIds.trendingArticleLink(trendingArticles.indexOf(article))}
          />
        ))}
        {/* Add one more article to fill the 4-column grid */}
        <ArticleCard
          article={articles[0]}
          pendoId={pendoIds.articleLink(articles[0].id)}
        />
      </div>
    </div>
  );
};

export default HomePage;