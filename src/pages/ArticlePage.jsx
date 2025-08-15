import { useParams } from 'react-router-dom';
import { Clock, User, Share2, BookOpen } from 'lucide-react';
import { getArticleById } from '../utils/data';

const ArticlePage = () => {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="bg-card rounded-lg border border-border overflow-hidden">
        {/* Article Header */}
        <header className="p-8 border-b border-border">
          <div className="mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {article.description}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>5 min read</span>
            </div>
            <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Article Content */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-card-foreground leading-relaxed mb-6">
              This is a sample article for the Newsly prototype. In a real implementation, this would contain the full article content retrieved from a content management system or database.
            </p>
            
            <p className="text-card-foreground leading-relaxed mb-6">
              The article would include rich text formatting, embedded media, quotes from sources, and comprehensive coverage of the topic. For this demonstration, we're showing how the layout and styling would appear with actual content.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg text-muted-foreground">
              "This is an example of how quotes would be displayed in the article layout, with proper styling and visual hierarchy."
            </blockquote>

            <p className="text-card-foreground leading-relaxed mb-6">
              Additional paragraphs would continue the story, providing in-depth analysis, background information, and expert opinions on the subject matter. The layout is designed to be readable and engaging for users across all device sizes.
            </p>

            <h2 className="text-2xl font-bold text-card-foreground mb-4 mt-8">
              Key Points
            </h2>

            <ul className="list-disc list-inside space-y-2 text-card-foreground mb-6">
              <li>Important fact or development related to the story</li>
              <li>Supporting evidence or data points</li>
              <li>Expert analysis or commentary</li>
              <li>Implications for readers or broader industry</li>
            </ul>

            <p className="text-card-foreground leading-relaxed">
              The article would conclude with a summary of the key points and any next steps or developments readers should watch for. This helps provide closure while keeping readers engaged with ongoing coverage.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;