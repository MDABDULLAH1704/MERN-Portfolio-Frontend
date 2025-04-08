import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
