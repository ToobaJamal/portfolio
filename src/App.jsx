import { useState } from 'react'
import './App.css'
import Navbar
 from './components/Navbar'
 import About from './pages/About'
 import Home from './pages/Home'
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
      </Routes>
    </>
  )
}

export default App
