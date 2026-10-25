import React from 'react'

function AboutSell() {
  return (
    <div>
        <div className='container'>
             <div className='row grid xs:grid-cols-1 md:grid-cols-3  gap-x-10 sm:gap-5 py-20 sm:px-10'>
          

                  <div className='flex flex-col justify-center items-center gap-3 text-center'>
                    <img src="/img/Trade-in1.svg.svg" alt="" />
                    <h3 className='text-xl font-bold '>Trade in or simply sell your car</h3>
                    <p className='text-sm text-gray-500 pt-2'>Sell car Carma, whether 
                    buying another car from us.</p>
                  </div>

                  <div className='flex flex-col justify-center items-center gap-3 text-center'>
                    <img src="/img/Trade-in2.svg.svg" alt="" />
                    <h3 className='text-xl font-bold '>Fair and accurate valuations</h3>
                    <p className='text-sm text-gray-500 pt-2'>We use up-to-date market data price 
                      car.</p>
                  </div>

                  <div className='flex flex-col justify-center items-center gap-3 text-center'>
                    <img src="/img/Trade-in3.svg.svg" alt="" />
                    <h3 className='text-xl font-bold '>A process that's smooth and easy</h3>
                    <p className='text-sm text-gray-500 pt-2'>We’ll even collect car from you.</p>
                  </div>
               </div>
             </div>
        
    </div>
  )
}

export default AboutSell