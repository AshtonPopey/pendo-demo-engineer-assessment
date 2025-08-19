import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Consistent data-pendo attribute IDs
export const pendoIds = {
  // Navigation
  navLogo: 'nav-logo',
  navCategory: (category) => `nav-category-${category.toLowerCase()}`,
  navSearch: 'nav-search',
  navTechnologyLink: 'nav-technology-link',
  
  // Announcements and CTAs
  techCategoryAnnouncement: 'tech-category-announcement',
  subscribeCta: 'subscribe-cta',
  
  // Article Links
  articleLink: (id) => `article-link-${id}`,
  heroArticleLink: 'article-link-1',
  trendingArticleLink: (index) => `article-link-${index + 2}`,
  
  // Footer
  footerAbout: 'footer-about',
  footerSections: 'footer-sections',
  footerDescription: 'footer-description'
};

// Custom hook to initialize Pendo and track route changes
export const usePendoInitialize = () => {
  const location = useLocation();

  useEffect(() => {
    // Get or create visitor ID
    let visitorId = localStorage.getItem('pendoVisitorId');
    if (!visitorId) {
      visitorId = 'visitor_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('pendoVisitorId', visitorId);
    }

    // Initialize Pendo if available
    if (window.pendo) {
      window.pendo.initialize({
        visitor: {
          id: visitorId,
          email: 'demo@newsly.com',
          role: 'user'
        },
        account: {
          id: 'newsly-demo'
        }
      });
    }
  }, []);

  useEffect(() => {
    // Track route changes
    if (window.pendo && window.pendo.track) {
      window.pendo.track('route_change', { 
        path: location.pathname,
        timestamp: new Date().toISOString()
      });
    }
  }, [location.pathname]);
};

// Helper function to get visitor ID
export const getVisitorId = () => {
  return localStorage.getItem('pendoVisitorId') || 'anonymous';
};