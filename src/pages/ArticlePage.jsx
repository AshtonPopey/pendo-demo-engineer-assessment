import { useParams } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import { getArticleById } from '../utils/data';

const ArticlePage = () => {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <article className="bg-card border border-card-border rounded overflow-hidden">
        {/* Article Header */}
        <header className="p-8 border-b border-card-border">
          <div className="mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-card-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Article Meta */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-4">
              <span className="font-medium">{article.author}</span>
              <span>•</span>
              <span>{article.publishedAt}</span>
            </div>
            <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Article Image */}
        <div className="h-80 bg-muted"></div>

        {/* Article Content */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-card-foreground leading-relaxed mb-6 text-lg">
              {article.description}
            </p>
            
            <p className="text-card-foreground leading-relaxed mb-6">
              Despite a dramatic opening to the season, Joe Smith, Marvine was originally a mid-tier prospect with above-average peripherals. So if you're looking for a way to unwind this summer, why not pick up a few books and escape into some captivating stories?
            </p>

            <p className="text-card-foreground leading-relaxed mb-6">
              It is more than this though: Marvine's spectacular early season might have slightly over-estimated his potential and left Sixers fans with the expectation of more dominance. This is still very concerning at this point.
            </p>

            <p className="text-card-foreground leading-relaxed mb-6">
              It is not easy to find big Marvine's progress thus far this May, Kevin Edwards Sixers fans from last year are now being found to be true: a good start might not be a indicator about his remaining play.
            </p>

            <p className="text-card-foreground leading-relaxed mb-6">
              Regardless of how the rest of Marvine's tenure playing here, he has managed to shed doubts of his overall value with his early-season excellence with Marvine having been a pivotal performer alongside early games during spring training.
            </p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="border-t border-card-border p-8">
          <h3 className="text-lg font-bold text-card-foreground mb-6">Comments</h3>
          
          <div className="space-y-6">
            <div className="border-b border-card-border pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-muted rounded-full"></div>
                <span className="font-medium text-sm">Tom H.</span>
              </div>
              <p className="text-sm text-muted-foreground">Great article! Really enjoyed reading this perspective.</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <span>👍</span>
                  <span>12</span>
                </button>
                <button className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <span>💬</span>
                  <span>Reply</span>
                </button>
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-muted rounded-full"></div>
                <span className="font-medium text-sm">Alex M.</span>
              </div>
              <p className="text-sm text-muted-foreground">Interesting analysis. Looking forward to more updates on this story.</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <span>👍</span>
                  <span>8</span>
                </button>
                <button className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <span>💬</span>
                  <span>Reply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;