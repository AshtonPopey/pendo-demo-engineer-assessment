// src/components/Header.jsx
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const TABS = [
  { label: "LATEST", to: "/category/latest" },
  { label: "WORLD", to: "/category/world" },
  { label: "SPORTS", to: "/category/sports" },
  { label: "CULTURE", to: "/category/culture" },
  { label: "ECONOMY", to: "/category/economy" },
];

export default function Header() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function onSearch(e) {
    e.preventDefault();
    if (!q.trim()) return;
    // If you add a search page later, wire it here:
    // navigate(`/search?q=${encodeURIComponent(q)}`);
    // For now, just jump to "latest" to mimic wireframe behavior.
    navigate(`/category/latest`);
  }

  return (
    <header className="border-b bg-white">
      {/* Top row: Search (L) – Logo (C) – Auth (R) */}
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-12 items-center gap-4">
        {/* Search */}
        <form
          onSubmit={onSearch}
          className="col-span-5 sm:col-span-4 flex"
          role="search"
          aria-label="Site"
        >
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search"
            className="w-full border rounded-l-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button
            type="submit"
            className="border border-l-0 rounded-r-md px-4 py-2 hover:bg-gray-50"
            aria-label="Submit search"
          >
            Go
          </button>
        </form>

        {/* Logo (centered) */}
        <div className="col-span-2 sm:col-span-4 flex justify-center">
          <Link to="/" className="inline-flex items-center">
            <span className="text-2xl font-extrabold tracking-wide">LOGO</span>
          </Link>
        </div>

        {/* Auth actions */}
        <div className="col-span-5 sm:col-span-4 flex justify-end gap-3">
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">
            Sign in
          </button>
          <button className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900">
            Subscribe
          </button>
        </div>
      </div>

      {/* Tabs row */}
      <nav className="border-t">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-6 overflow-x-auto py-3">
            {TABS.map((tab) => (
              <li key={tab.to}>
                <NavLink
                  to={tab.to}
                  className={({ isActive }) =>
                    [
                      "text-sm font-semibold tracking-wide uppercase",
                      isActive ? "text-black" : "text-gray-500 hover:text-black",
                    ].join(" ")
                  }
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
