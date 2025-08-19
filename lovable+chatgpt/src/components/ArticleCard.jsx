import { Link } from 'react-router-dom';

const ArticleCard = ({ article, className = "", pendoId, isHero = false }) => {
  return (
    <Link 
      to={`/article/${article.id}`}
      data-pendo={pendoId}
      className={`group block ${className}`}
    >
      <article className={`bg-card border border-card-border rounded overflow-hidden transition-all duration-200 hover:shadow-sm ${isHero ? 'p-8' : 'p-6'}`}>
        {/* Image placeholder */}
        <div className={`bg-muted rounded mb-4 ${isHero ? 'h-64' : 'h-40'}`}></div>
        
        {/* Category tag */}
        {article.category && (
          <div className="mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {article.category}
            </span>
          </div>
        )}

        {/* Article content */}
        <div>
          <h2 className={`font-bold text-card-foreground group-hover:text-primary transition-colors mb-3 leading-tight ${
            isHero ? 'text-2xl' : 'text-lg'
          }`}>
            {article.title}
          </h2>
          
          {isHero && (
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {article.description}
            </p>
          )}

          {/* Article metadata */}
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.publishedAt}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;