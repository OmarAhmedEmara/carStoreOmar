import React from 'react'

function AboutUs() {
  return (
    <div className='container '>
        <h1 className='text-center pt-24 text-3xl text-red-800 font-bold '>What our customers say about us</h1>
        <div className='row  grid xs:grid-cols-1 md:grid-cols-2 gap-4 md:gap-5  '>
           
            <div className='pt-30'>
                <img src='/img/image (4).png'/>
            </div>
            <div className='pt-32 md:pt-9'>
                <img  src='/img/Vector.png'/>
                 <span className='text-center  font-bold text-gray-400 '>At first, I was skeptical of buying a
                    car without a test drive, but the
                    whole process/experience has been
                    made a lot easier with their
                    amazing service. Carma have been
                    impeccable and I would highly
                    recommend them to anyone that is
                    considering buying a used car. Best
                    dealership ever, and everyone goes
                    the extra mile for their customers.</span>
            </div>
        </div>
    </div>
  )
}

export default AboutUs