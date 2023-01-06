import { useState } from 'react'
import './App.css'
import Navbar
 from './components/Navbar'
 import About from './pages/About'
 import Home from './pages/Home'
 import Hire from './pages/Hire'
 import Projects from './pages/Projects'
 import Contact from './pages/Contact'
 import Footer from './components/Footer'
 import {
  Route,
  Routes
} from "react-router-dom"


 function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/hire' element={<Hire />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
