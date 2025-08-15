import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { usePendoInitialize } from '../utils/pendo';

const Layout = () => {
  usePendoInitialize();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Pendo embedded region - minimal banner */}
      <div id="pendo-embedded-region" className="bg-accent border-b border-accent-border">
        <div className="max-w-6xl mx-auto px-6 py-2">
          <div className="flex items-center justify-center text-center">
            <span className="text-xs text-accent-foreground">
              🎉 Subscribe now for 50% off your first year!
            </span>
            <button 
              data-pendo="subscribe-cta"
              className="ml-4 bg-primary text-primary-foreground px-3 py-1 rounded text-xs hover:bg-primary/90 transition-colors"
            >
              Subscribe
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