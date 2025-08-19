// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

/** Small story card with image (used in left/right stacks) */
function StoryCard({ to, kicker = "NEWS", title, author = "TOM JERRY", date = "13 June 2023" }) {
  return (
    <Link
      to={to}
      className="block rounded-xl overflow-hidden border bg-white hover:shadow-md transition"
    >
      <div className="h-40 bg-gray-300" />
      <div className="p-4">
        <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">{kicker}</p>
        <h3 className="font-semibold leading-snug">{title}</h3>

        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span className="uppercase">{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
}

/** Big hero image card centered at top-middle */
function HeroCard({ to, title }) {
  return (
    <Link
      to={to}
      className="block rounded-xl overflow-hidden border bg-white hover:shadow-md transition"
    >
      <div className="h-64 bg-gray-300" />
      <div className="p-5">
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
      </div>
    </Link>
  );
}

/** Featured text card beneath hero (category + title + summary + author/date) */
function FeaturedTextCard({
  to,
  kicker = "CULTURE",
  title,
  summary,
  author = "TOM JERRY",
  date = "13 June 2023",
}) {
  return (
    <Link
      to={to}
      className="block rounded-xl overflow-hidden border bg-white hover:shadow-md transition text-center"
    >
      <div className="p-6">
        <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">{kicker}</p>
        <h3 className="text-xl font-extrabold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm max-w-prose mx-auto">
          {summary}
        </p>

        <div className="mt-5 grid grid-cols-3 text-xs text-gray-500 max-w-sm mx-auto">
          <span className="uppercase text-left">{author}</span>
          <span />
          <span className="text-right">{date}</span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tabs already live in Header; this is the article grid area */}

      {/* === Main 3-column layout (desktop) === */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column (two stacked cards) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <StoryCard
            to="/article/1"
            title="Lost cat found the way back to her home"
          />
          <StoryCard
            to="/article/2"
            title="Lost cat found the way back to her home"
          />
        </div>

        {/* Center column (hero + featured text) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <HeroCard
            to="/article/hero"
            title="Lost cat found the way back to her home"
          />

          <FeaturedTextCard
            to="/article/center"
            title="Lost cat found the way back to her home"
            summary="Summer is the perfect time to indulge in some leisurely reading, whether it’s lying on the beach or lounging in the park. So if you’re looking for a way to unwind this summer, why not pick up a few books and escape into some captivating stories?"
          />
        </div>

        {/* Right column (two stacked cards) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <StoryCard
            to="/article/3"
            kicker="SPORTS"
            title="Lost cat found the way back to her home"
            author="FRED BALLER"
            date="14 June 2023"
          />
          <StoryCard
            to="/article/4"
            title="Lost cat found the way back to her home"
          />
        </div>
      </div>

      {/* === Footer banner area (as in wireframe) === */}
      <div className="mt-10">
        <div className="bg-gray-200 rounded-xl py-10 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold tracking-wide">Logo</span>
          {/* Social row (icons placeholder) */}
          <div className="mt-4 flex items-center gap-4 text-gray-600">
            <span className="w-4 h-4 bg-gray-400 rounded-sm" />
            <span className="w-4 h-4 bg-gray-400 rounded-sm" />
            <span className="w-4 h-4 bg-gray-400 rounded-sm" />
            <span className="w-4 h-4 bg-gray-400 rounded-sm" />
          </div>
        </div>

        {/* legal links row (mirroring wireframe) */}
        <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
          <Link to="/about" className="hover:text-black">About</Link>
          <Link to="/authors" className="hover:text-black">Authors</Link>
          <Link to="/archive" className="hover:text-black">Archive</Link>
          <Link to="/terms" className="hover:text-black">Terms and Conditions</Link>
          <Link to="/cookies" className="hover:text-black">Cookie Policy</Link>
        </nav>
      </div>
    </div>
  );
}
