// src/components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  // Optional: emit a lightweight Pendo event on route change
  useEffect(() => {
    if (window.pendo && typeof window.pendo.track === "function") {
      window.pendo.track("route_change", {
        path: location.pathname + location.search,
        title: document.title || "",
      });
    }
  }, [location]);

  return (
    <>
      {/* a11y: skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
