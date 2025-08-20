import { Link, useParams } from 'react-router-dom'
import { Search, Twitter, Facebook, Linkedin } from 'lucide-react'

const Category = () => {
  const { categoryName } = useParams()

  const categoryInfo = {
    culture: {
      title: "Culture",
      description: "Welcome to the cultural section of our news, where we explore the latest trends and topics in art, music, film, literature, and more. From groundbreaking exhibitions and performances to up-and-coming artists and cultural events, we aim to provide you with a diverse range of stories that showcase the richness and diversity of our world's creative landscape."
    },
    world: {
      title: "World",
      description: "Stay informed about global events and international news from around the world. Our comprehensive coverage brings you the latest developments in politics, economics, and society from every continent."
    },
    sports: {
      title: "Sports",
      description: "Get the latest sports news, scores, and analysis from around the world. From professional leagues to amateur competitions, we cover all the action that matters to sports fans."
    },
    economy: {
      title: "Economy",
      description: "Follow the latest economic trends, market analysis, and financial news that affects businesses and consumers worldwide. Stay informed about the forces shaping our global economy."
    }
  }

  const currentCategory = categoryInfo[categoryName] || categoryInfo.culture

  const articles = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    title: "Lost cat found the way back to her home",
    author: "TOM JERRY",
    date: "13 June 2023"
  }))

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 w-64"
              />
            </div>
          </div>

          <div className="text-2xl font-bold text-gray-800">
            <Link to="/">Logo</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              Sign in
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center space-x-12 py-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">LATEST</Link>
            <Link
              to="/category/world"
              className={`hover:text-gray-800 ${categoryName === 'world' ? 'text-gray-800 font-medium' : 'text-gray-600'}`}
            >
              WORLD
            </Link>
            <Link
              to="/category/sports"
              className={`hover:text-gray-800 ${categoryName === 'sports' ? 'text-gray-800 font-medium' : 'text-gray-600'}`}
            >
              SPORTS
            </Link>
            <Link
              to="/category/culture"
              className={`hover:text-gray-800 ${categoryName === 'culture' ? 'text-gray-800 font-medium' : 'text-gray-600'}`}
            >
              CULTURE
            </Link>
            <Link
              to="/category/economy"
              className={`hover:text-gray-800 ${categoryName === 'economy' ? 'text-gray-800 font-medium' : 'text-gray-600'}`}
            >
              ECONOMY
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentCategory.title}</h1>
          <p className="text-gray-600 leading-relaxed max-w-4xl">
            {currentCategory.description}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">
                <Link
                  to="/article"
                  className="hover:text-gray-600"
                  data-pendo-feature-id="article-link"
                  onClick={() =>
                    window.pendo?.track?.("article_click", {
                      id: article.id,             // unique id if you have one
                      title: article.title,       // article title
                      description: article.summary || "No summary available", // 👈 add description
                      surface: "category-articles-list",   // label where the click came from
                      clickedAt: new Date().toISOString() // 👈 explicit timestamp if you want
                    })
                  }
                >
                  {article.title}
                </Link>
                </h3>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-700">
            Load more
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 mb-4">Logo</div>
            <div className="flex justify-center space-x-4 mb-6">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </div>
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-800">About</a>
              <a href="#" className="hover:text-gray-800">Authors</a>
              <a href="#" className="hover:text-gray-800">Archive</a>
              <a href="#" className="hover:text-gray-800">Terms and Conditions</a>
              <a href="#" className="hover:text-gray-800">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Category
