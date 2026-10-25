import React from 'react'

function WorkSell() {
  return (
    <div>
        <div className='container'>
             <div className='row grid xs:grid-cols-1 md:grid-cols-2  gap-x-10 sm:gap-5'>
                  <div>
                         <img src="/img/image (1).svg" />
                  </div>
                  <div >
                      
                       <div >
                          <h2 className='text-2xl font-bold '>How it works</h2>
                         <div className='flex justify-center'>
                           <img  src="/img/div.HowTradeInWorks_iconWrapper__2BVLu.png"/>
                            <div className=' flex flex-col'>

                                <h3 className='text-xl font-bold '>Find your car</h3>
                                <p className='text-sm text-gray-500 pt-2'>Enter your VIN or registration plate along with your state
                                of registration to find the car you want to sell or trade.</p>
                            </div>
                         </div>
                          
                          <div className='flex justify-center'>
                           <img  src="/img/div.HowTradeInWorks_iconWrapper__2BVLu (1).png"/>
                            <div className=' flex flex-col'>

                              <h3 className='text-xl font-bold '>Tell us about your car</h3>
                              <p className='text-sm text-gray-500 pt-2' >Answer some quick questions about your car and it’s
                                condition. If you are selling your car we will also ask for
                                photos to help us better understand its condition.</p>
                            </div>
                          </div>
                           
                           <div className='flex justify-center'>
                                <img className='w-[55px] h-[55px]' src="/img/SVG (3).png" />
                            <div className=' flex flex-col'>

                               <h3 className='text-xl font-bold '>Let us know who you are</h3>
                               <p className='text-sm text-gray-500 pt-2'>Provide us with your name, email and phone number so
                                we can chat to you about your trade in offer.</p>
                            </div>
                           </div>
                       </div>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default WorkSell