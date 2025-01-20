import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import UpButton from './components/UpButton'

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <Portfolio/>
      <Skills />
      <Contact/>
      <Footer/>
      <UpButton/>
    </div>
  )
}

export default App