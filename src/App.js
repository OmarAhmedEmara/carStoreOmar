
import React from 'react'


import HeroSection from './Home/HeroSection'



import ExpertTeam from './Home/ExpertTeam'

import Navbar from './Components/Navbar'
import AllCompo from './Components/AllCompo'
import AllFooter from './Components/AllFooter'
import About from './Home/About'
import AboutUs from './Components/AboutUs'
import Nesan from './Home/Nesan'






function App() {
  return (
    <div>
     
      <AllCompo/>
      <HeroSection/> 
      <Nesan/>
      
      <About/>
      
      <ExpertTeam/>
      <AboutUs/>
      <AllFooter/>
    </div>
  )
}

export default App