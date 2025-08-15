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
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row with logo, navigation, and search */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            data-pendo={pendoIds.navLogo}
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Newsly
          </Link>

          {/* Category Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                data-pendo={pendoIds.navCategory(category)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Search and Technology Link */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search news..."
                  data-pendo={pendoIds.navSearch}
                  className="pl-10 pr-4 py-2 w-64 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
            </form>
            
            <Link
              to="/category/Technology"
              data-pendo={pendoIds.navTechnologyLink}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Technology
            </Link>
          </div>
        </div>

        {/* Mobile navigation - shown on smaller screens */}
        <div className="md:hidden pb-4">
          <nav className="flex flex-wrap gap-2">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                data-pendo={pendoIds.navCategory(category)}
                className="text-xs font-medium text-foreground hover:text-primary px-2 py-1 rounded border border-border"
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;