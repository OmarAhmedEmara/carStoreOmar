import React from 'react'
import AllCompo from '../Components/AllCompo'
import AllFooter from '../Components/AllFooter'
import AboutUs from '../Components/AboutUs'
import HeroWorks from './HeroWorks'
import Over from './Over'
import Remember from './Remember'
import OurCommitment from './OurCommitment'
import NeedUs from './NeedUs'
import Visa from './Visa'
import CarmaWorks from './CarmaWorks'

function AllHowItWorks() {
  return (
    <div>
     <AllCompo/>
     <HeroWorks/>
     <CarmaWorks/>
     <Over/>
     <Remember/>
     <OurCommitment/>
     <NeedUs/>
     <Visa/>
     <AboutUs/>
      <AllFooter/>
    </div>
  )
}

export default AllHowItWorks