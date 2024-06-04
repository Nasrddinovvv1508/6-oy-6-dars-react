import './App.css'

// react router dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>

        <nav>
          <h1>My Articles</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Pages */}
        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
