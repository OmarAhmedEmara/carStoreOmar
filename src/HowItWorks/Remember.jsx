import React from 'react'

function Remember() {
  return (
    <div className=' bg-[#150D2C]'>
 
    <div className='container '>
        <h1 className='text-center pt-10 text-3xl text-white font-bold '>Remember, every car comes with:</h1>
        <div className='row grid xs:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 py-20 '>
            <div>
                <div className='flex items-center'>

                <img className='w-[50px]' src="/img/Frame.png"  />
                <span className='  text-xl text-white font-bold '>7 day money-back promise</span>
                </div>
                <p className='text-sm  font-bold text-gray-400'>If it’s not right we’ll come pick ,
                refund help find replacement.</p>
            </div>

             <div>
               <div className='flex items-center'>
                    <img className='w-[50px]' src="/img/SVG (1).png"  />
                    <span className=' text-xl text-white font-bold '>3 month warranty</span>

                </div> 
                <p className='text-sm font-bold text-gray-400'>Relax, your car protected 
                comprehensive 3 month warranty.
                </p>
            </div>

             <div>
                <div className='flex items-center'>

                    <img className='w-[50px]' src="/img/Frame (4).png" alt="" />
                    <span className='  text-xl text-white font-bold '>1 year roadside assistance</span>
                </div>
                <p className=' text-sm font-bold text-gray-400'>For additional peace mind, give 
                  NRMA roadside assistance membership.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Remember