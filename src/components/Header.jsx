import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { categories } from '../utils/data';
import { pendoIds } from '../utils/pendo';

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Placeholder search functionality
    console.log('Search submitted');
  };

  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row with search, logo, and actions */}
        <div className="flex items-center justify-between py-6">
          {/* Left: Search */}
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                data-pendo={pendoIds.navSearch}
                className="w-48 px-4 py-2 border border-input-border rounded bg-input text-sm focus:outline-none focus:border-ring"
              />
            </div>
          </form>

          {/* Center: Logo */}
          <Link 
            to="/" 
            data-pendo={pendoIds.navLogo}
            className="text-xl font-bold text-foreground"
          >
            Logo
          </Link>

          {/* Right: Sign In + Subscribe */}
          <div className="flex items-center space-x-3">
            <button className="text-sm text-muted-foreground hover:text-foreground">
              Sign in
            </button>
            <Link
              to="/category/Technology"
              data-pendo={pendoIds.navTechnologyLink}
              className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>

        {/* Navigation Categories */}
        <div className="border-t border-border">
          <nav className="flex items-center justify-center space-x-8 py-4">
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                data-pendo={pendoIds.navCategory(category)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {category === 'U.S.' ? 'WORLD' : category.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;