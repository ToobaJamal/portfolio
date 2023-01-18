import { useEffect } from 'react'
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
import ProjectDetail from './pages/ProjectDetail'


 function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/hire' element={<Hire />} />
        <Route path='/projects' element={<Projects/>}>
          <Route index={false} path="/projects/:title" element={<ProjectDetail/>} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
