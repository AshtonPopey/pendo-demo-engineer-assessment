import { Link } from 'react-router-dom';
import { categories } from '../utils/data';
import { pendoIds } from '../utils/pendo';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div data-pendo={pendoIds.footerAbout}>
            <h3 className="text-lg font-semibold text-foreground mb-4">About Newsly</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Sections Column */}
          <div data-pendo={pendoIds.footerSections}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Sections</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link 
                    to={`/category/${category}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Description Column */}
          <div data-pendo={pendoIds.footerDescription}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Stay Informed</h3>
            <p className="text-muted-foreground mb-4">
              Newsly delivers breaking news, in-depth analysis, and expert commentary on the stories that matter most. 
              From technology and business to health and culture, we keep you informed about the world around you.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                Twitter
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Newsly. All rights reserved. Built for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;