import React from 'react'

function Visa() {
  return (
    <div className=' bg-[#100B34] py-20'>
        <div className='container'>
            <h2  className='  text-2xl text-white text-center py-10 font-bold '>Pay your way with
            Carma’s flexible payment options</h2>
            <div className='row grid xs:grid-cols-1 md:grid-cols-2 gap-4'>
               <div className=' flex flex-col items-center gap-3 bg-white rounded-md px-5 py-5'>

                <img src="/img/span (14).png" />
                <h3 className='  text-xl  font-bold '>Spread the cost with finance</h3>
                <p className='text-sm  font-bold '>Get great rate flexible finance options car really<br/>
                Working trusted, carefully selected lenders, <br/>
                hassle negotiating good deal.</p>
                <p>Get quote apply under 20 minutes.</p>
                <div className='flex flex-col  items-center py-9  gap-3 bg-gray-200 rounded-md'>
                    <img className='w-[20%]' src="/img/contact.svg.png"  />
                    <span className='text-sm  '>Finance through select panel lenders <br/>
                        provide dedicated Carma finance consultant help <br/>
                        through whole application approval<br/>
                        process.</span>
                </div>
                <button type="button" className="w-56 py-3  bg-[#332E69] active:scale-95 transition text-sm text-white rounded-lg "><p class="mb-0.5">Find out</p></button>
               </div>
               <div>

               <div  className='flex flex-col items-center gap-3 bg-white rounded-md py-5 px-5'>
                  <img src="/img/span (8).png" />
                  <h3 className='  text-xl  font-bold '>Pay in full for faster delivery</h3>
                  <p className='text-sm  font-bold '>Choose pay full credit card bank transfer quickest<br/>
                 Carma car.accept most major Australian<br/>
                    credit  debit cards.</p>
                    <h4 className='  text-xl  font-bold '>Powered by</h4>
                    <div className='flex gap-1'>
                        <img src="/img/image.svg" alt="" />
                        <img src="/img/span (15).png" alt="" />
                    </div>
               </div>
               <div className=' flex flex-col items-center gap-3  rounded-md py-5 px-5 bg-[#332E69] my-10 '>
                  <h3 className='  text-xl  font-bold text-white '>Bring your own financier</h3>
                  <p className='text-sm  font-bold text-gray-400'>Already locked finance elsewhere? <br/>problem. work
                    finance car.</p>
               </div>
               </div>

            </div>
        </div>
    </div>
  )
}

export default Visa