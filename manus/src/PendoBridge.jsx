// src/PendoBridge.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Mount once somewhere under <BrowserRouter>. It:
 *  - fires a pendo.track('route_change') on URL changes
 *  - exposes an anchor for the embedded banner guide
 */
export default function PendoBridge() {
  const location = useLocation();

  useEffect(() => {
    // fire on first mount too
    window.pendo?.track?.("route_change", {
      path: location.pathname + location.search,
      pageType: location.pathname.startsWith("/article")
        ? "article"
        : location.pathname.startsWith("/category")
        ? "category"
        : "home",
    });
  }, [location]);

  return <div data-pendo-guide-anchor="global-subscribe-banner" />;
}
