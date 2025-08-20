import { Link } from 'react-router-dom'
import { Search, Twitter, Facebook, Linkedin } from 'lucide-react'

const Homepage = () => {
  const articles = [
    {
      id: 1,
      title: "Lost cat found the way back to her home",
      author: "TOM JERRY",
      date: "13 June 2023",
      category: "NEWS",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Lost cat found the way back to her home",
      author: "FRED BALLER",
      date: "14 June 2023",
      category: "SPORTS",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Lost cat found the way back to her home",
      author: "TOM JERRY",
      date: "13 June 2023",
      category: "NEWS",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Lost cat found the way back to her home",
      author: "TOM JERRY",
      date: "13 June 2023",
      category: "NEWS",
      image: "/api/placeholder/300/200"
    }
  ]

  const featuredArticle = {
    title: "Lost cat found the way back to her home",
    excerpt: "Summer is the perfect time to indulge in some leisurely reading, whether it's lying on the beach or lounging in the park. So if you're looking for a way to unwind this summer, why not pick up a few books and get lost in some captivating stories?",
    author: "TOM JERRY",
    date: "13 June 2023",
    category: "CULTURE"
  }

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
            Logo
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
            <Link to="/" data-pendo-feature-id="category-link" className="text-gray-800 font-medium hover:text-gray-600">LATEST</Link>
            <Link to="/category/world" data-pendo-feature-id="category-link" className="text-gray-600 hover:text-gray-800">WORLD</Link>
            <Link to="/category/sports" data-pendo-feature-id="category-link" className="text-gray-600 hover:text-gray-800">SPORTS</Link>
            <Link to="/category/culture" data-pendo-feature-id="category-link" className="text-gray-600 hover:text-gray-800">CULTURE</Link>
            <Link to="/category/economy" data-pendo-feature-id="category-link" className="text-gray-600 hover:text-gray-800">ECONOMY</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-2">{articles[0].category}</div>
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/article"
                  className="hover:text-gray-600"
                  data-pendo-feature-id="article-link"
                  onClick={() =>
                    window.pendo?.track?.("article_click", {
                      id: article.id,             // unique id if you have one
                      title: article.title,       // article title
                      description: article.summary || "No summary available", // 👈 add description
                      surface: "homepage-list",   // label where the click came from
                      clickedAt: new Date().toISOString() // 👈 explicit timestamp if you want
                    })
                  }
                >
                    {articles[0].title}
                  </Link>
                </h3>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{articles[0].author}</span>
                  <span>{articles[0].date}</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-2">{articles[2].category}</div>
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/article" className="hover:text-gray-600">
                    {articles[2].title}
                  </Link>
                </h3>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{articles[2].author}</span>
                  <span>{articles[2].date}</span>
                </div>
              </div>
            </article>
          </div>

          {/* Center Column - Featured Article */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-64 bg-gray-300"></div>
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-2">{featuredArticle.category}</div>
              <h2 className="font-bold text-2xl mb-4">
                <Link to="/article" className="hover:text-gray-600">
                  {featuredArticle.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{featuredArticle.author}</span>
                <span>{featuredArticle.date}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-2">{articles[1].category}</div>
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/article" className="hover:text-gray-600">
                    {articles[1].title}
                  </Link>
                </h3>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{articles[1].author}</span>
                  <span>{articles[1].date}</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-2">{articles[3].category}</div>
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/article" className="hover:text-gray-600">
                    {articles[3].title}
                  </Link>
                </h3>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{articles[3].author}</span>
                  <span>{articles[3].date}</span>
                </div>
              </div>
            </article>
          </div>
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

export default Homepage
