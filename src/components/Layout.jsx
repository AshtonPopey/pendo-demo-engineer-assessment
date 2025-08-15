import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { usePendoInitialize } from '../utils/pendo';

const Layout = () => {
  usePendoInitialize();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Pendo embedded region with fallback banner */}
      <div id="pendo-embedded-region" className="bg-primary-light border-y border-accent-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-accent-foreground">
              🎉 Subscribe now for 50% off your first year!
            </span>
            <button 
              data-pendo="subscribe-cta"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;