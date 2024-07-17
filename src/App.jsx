import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './pages/nav/Nav'
import Home from './pages/home/Home'
import Ads from './pages/ads/Ads'
import Services from './pages/services/Services'
// import './App.css'

function App() {
  

  return (
    <>
    <Nav/>
    <Home/>
    <Ads/>
    <Services/>
    </>
  )
}

export default App
