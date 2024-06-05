import './fonts.css'
import './App.css'

// react router dom
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>

        <nav className='container-speacial'>
          <div className='pages'>

            <Link to="/">
              <img src="./src/assets/myteam.svg" alt="MyTeam Logo" />
            </Link>
            <div>
              <NavLink to="/">home</NavLink>
              <NavLink to="/about">about</NavLink>
            </div>
          </div>
          <NavLink className="contactUS" to="/contact">contact us</NavLink>
        </nav>

        {/* Pages */}
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
