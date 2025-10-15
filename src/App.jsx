import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

// ✅ importe le fond animé
import AnimatedBackground from './Components/AnimatedBackground/AnimatedBackground'

const App = () => {
  return (
    <div>
      {/* ✅ Fond animé en arrière-plan */}
      <AnimatedBackground />

      {/* ✅ Sections principales */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
