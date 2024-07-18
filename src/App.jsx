import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './pages/nav/Nav'
import Home from './pages/home/Home'
import Ads from './pages/ads/Ads'
import Services from './pages/services/Services'
import Case from './pages/case/Case'
import Work from './pages/work/Work'
import Team from './pages/team/Team'
// import './App.css'

function App() {
  

  return (
    <>
    <Nav/>
    <Home/>
    <Ads/>
    <Services/>
    <Case/>
    <Work/>
    <Team/>
    </>
  )
}

export default App
