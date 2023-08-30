// import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/services"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
