import { useState } from 'react'
import './App.css'
import Navbar
 from './components/Navbar'
 import About from './pages/About'
 import {
  Route,
  Routes
} from "react-router-dom"


 function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
