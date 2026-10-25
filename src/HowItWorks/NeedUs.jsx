import React from 'react'

function NeedUs() {
  return (
    <div>
        <div className='container'>
            <div className='row grid xs:grid-cols-1 md:grid-cols-2 gap-4 py-20'>
                <div>
                    <img className='w-[350px]' src="/img/Carma-16.png.png "  />
                </div>
                <div className='flex flex-col gap-3 py-20 px-9'>
                    <h2 className='  text-xl  font-bold '>Here when you need us</h2>
                    <p className='text-sm  font-bold text-gray-400'>From help choosing a car and managing payments, to organising the
                        delivery slot that works for you, we're always just a phone call or
                        message away.</p>
                        <button type="button" className="w-40 py-3  bg-[#332E69] active:scale-95 transition text-sm text-white rounded-lg "><p class="mb-0.5">Get in touch</p></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NeedUs