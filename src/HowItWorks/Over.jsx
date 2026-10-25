import React from 'react'

function Over() {
  return (
    <div className='container'>
        <div className='row grid xs:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 py-20 sm:px-10'>

            <div className='w-[350px] '>
                <img src="/img/image (5).png"  className='max-w-[90%]'/>
            </div>
            <div>
                <h3 className='text-xl font-bold '>Over 250 5-star reviews and
                counting</h3>
                <p className='text-sm text-gray-500 pt-2'>We’re on a mission to create the easiest and best way to buy a used car in Australia and we’d love to have you come
                along for the ride.</p>
                <p className='text-sm text-gray-500 pt-2'>See what Carma customers are saying about their experience on Google and ProductReview.com.au.</p>
                <img className='pt-5' src="/img/Link ⏵ from-internal-entry-id.png"  />
            </div>
        </div>
    </div>
  )
}

export default Over