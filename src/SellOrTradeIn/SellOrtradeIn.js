import React from 'react'
import AllCompo from '../Components/AllCompo'
import AboutUs from '../Components/AboutUs'
import AllFooter from '../Components/AllFooter'
import HeroSell from './HeroSell'
import AboutSell from './AboutSell'
import WorkSell from './WorkSell'


function SellOrtradeIn() {
  return (
    <div>
        <AllCompo/>
        <HeroSell/>
      
        <AboutSell/>
        <WorkSell/>
        <AboutUs/>
        <AllFooter/>
    </div>
  )
}

export default SellOrtradeIn