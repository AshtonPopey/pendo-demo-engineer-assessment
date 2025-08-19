// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        {/* Logo */}
        <div className="mb-6">
          <span className="text-2xl font-bold tracking-wide">LOGO</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <Link to="/about" className="hover:text-black">
            About
          </Link>
          <Link to="/archive" className="hover:text-black">
            Archive
          </Link>
          <Link to="/terms" className="hover:text-black">
            Terms and Conditions
          </Link>
          <Link to="/cookies" className="hover:text-black">
            Cookie Policy
          </Link>
        </nav>

        {/* Copyright */}
        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Demo News. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
