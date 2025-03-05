import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Skills from './Components/Skills'
import BackgroundWave from './Components/Backgroundewave'
import FloatingBall from './Components/FloatingBall'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar/>
    <BackgroundWave/>
    <Hero/>
    <FloatingBall/>
    
    <Skills/>
    <Project/>
    
    <Contact/>

     
    </>
  )
}

export default App
