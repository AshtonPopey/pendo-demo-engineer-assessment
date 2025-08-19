import { Link } from 'react-router-dom'
import { Search, Twitter, Facebook, Linkedin, Instagram, ThumbsUp, ThumbsDown } from 'lucide-react'

const Article = () => {
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
            <Link to="/category/world" className="text-gray-600 hover:text-gray-800">WORLD</Link>
            <Link to="/category/sports" className="text-gray-600 hover:text-gray-800">SPORTS</Link>
            <Link to="/category/culture" className="text-gray-600 hover:text-gray-800">CULTURE</Link>
            <Link to="/category/economy" className="text-gray-600 hover:text-gray-800">ECONOMY</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Article Header */}
          <div className="mb-8">
            <div className="text-xs text-gray-500 mb-2">NEWS</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Lost cat found the way back to her home
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              A cat named Mittens has made national headlines after she managed to find her way back home, despite being lost for four weeks. Mittens, a three-year-old tabby, went missing on July 4th after she escaped through an open window at her owner's home.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <div>7:00 PM</div>
                <div>13 June 2023</div>
              </div>
              <div className="flex space-x-3">
                <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-8">
            <div className="h-96 bg-gray-300 rounded-lg"></div>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Despite a frantic search by her owner, Jane Smith, Mittens was nowhere to be found. Smith put up flyers around the neighborhood and posted on social media, hoping someone would spot her beloved pet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Days turned into a week, and Smith had all but given up hope of ever seeing Mittens again. But then, to her surprise, she received a call from a neighbor who had spotted the cat on their porch. Smith rushed over and was overjoyed to find Mittens safe and sound.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              It's still unclear how Mittens managed to find her way home after being lost for so long. Some speculate that cats may have followed the scent of her owner's other cats, while others believe she simply had a strong homing instinct.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Regardless of how she did it, Mittens' incredible journey has captured the hearts of animal lovers across the country. Smith says she's grateful to have her furry friend back home, and plans to keep a closer eye on her in the future.
            </p>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="h-64 bg-gray-300 rounded-lg"></div>
            <div className="h-64 bg-gray-300 rounded-lg"></div>
          </div>

          {/* Comments Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Comments</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">Can I have happy ending?</div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">0</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsDown className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">0</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">Cute cat</div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">0</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsDown className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Add
            </button>
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

export default Article

