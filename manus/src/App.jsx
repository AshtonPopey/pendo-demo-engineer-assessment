import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Article from './components/Article'
import Category from './components/Category'
import PendoBridge from './PendoBridge'   // ⬅️ import it
import './App.css'

function App() {
  return (
    <Router>
      {/* Mount PendoBridge once inside Router */}
      <PendoBridge />

      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
