import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Article from './components/Article'
import Category from './components/Category'
import './App.css'

function App() {
  return (
    <Router>
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

