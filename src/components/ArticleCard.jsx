import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

const ArticleCard = ({ article, className = "", pendoId, isHero = false }) => {
  return (
    <Link 
      to={`/article/${article.id}`}
      data-pendo={pendoId}
      className={`group block ${className}`}
    >
      <article className={`bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg hover:bg-card-hover ${isHero ? 'p-6' : 'p-4'}`}>
        {/* Article content */}
        <div>
          <h2 className={`font-bold text-card-foreground group-hover:text-primary transition-colors mb-2 ${
            isHero ? 'text-2xl md:text-3xl' : 'text-lg'
          }`}>
            {article.title}
          </h2>
          
          <p className={`text-muted-foreground mb-4 line-clamp-3 ${
            isHero ? 'text-base md:text-lg' : 'text-sm'
          }`}>
            {article.description}
          </p>

          {/* Article metadata */}
          <div className="flex items-center text-xs text-muted-foreground space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{article.publishedAt}</span>
            </div>
            {article.category && (
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;