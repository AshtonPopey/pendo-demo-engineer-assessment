// src/pages/CategoryPage.jsx
import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";

const MOCK_ARTICLES = Array.from({ length: 28 }).map((_, i) => ({
  id: i + 1,
  title: `Category Article ${i + 1}`,
  excerpt:
    "Short summary text to tease the article. Pellentesque habitant morbi tristique senectus.",
}));

export default function CategoryPage() {
  const { category } = useParams();
  const [visibleCount, setVisibleCount] = useState(12);

  const formattedCat = useMemo(() => {
    if (!category) return "Category";
    // Convert "world-news" => "World News"
    return category
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }, [category]);

  const shown = MOCK_ARTICLES.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Top title + blurb */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{formattedCat}</h1>
        <p className="text-gray-600 max-w-3xl">
          Latest stories, insights, and analysis from the {formattedCat.toLowerCase()} section.
          Explore featured reporting, trending topics, and deep dives curated for you.
        </p>
      </header>

      {/* Grid of cards (4-wide) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shown.map((a) => (
          <Link
            to={`/article/${a.id}`}
            key={a.id}
            className="bg-gray-100 rounded-lg shadow hover:shadow-md transition overflow-hidden"
          >
            <div className="h-36 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">Image</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 line-clamp-2">{a.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{a.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Load more */}
      {visibleCount < MOCK_ARTICLES.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((c) => c + 8)}
            className="px-5 py-2 rounded-md bg-gray-900 text-white hover:bg-black"
          >
            Load More
          </button>
        </div>
      )}

      {/* Bottom banner like the mock */}
      <div className="mt-12 bg-gray-200 py-12 flex justify-center rounded-lg">
        <span className="text-2xl font-bold text-gray-600">LOGO</span>
      </div>
    </div>
  );
}
