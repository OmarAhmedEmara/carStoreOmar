import React from 'react'
import AllCompo from '../Components/AllCompo'
import AllFooter from '../Components/AllFooter'
import AboutUs from '../Components/AboutUs'
import HeroCarFinance from './HeroCarFinance'
import Works from './Works'
import FiveGreat from './FiveGreat'


function AllCarFinance() {
  return (
    <div>
        <AllCompo/>
        <HeroCarFinance/>
        <FiveGreat/>
        <Works/>
        <AboutUs/>
        <AllFooter/>
    </div>
  )
}

export default AllCarFinance