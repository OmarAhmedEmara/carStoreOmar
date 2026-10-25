import React from 'react'

function HeroSell() {
  return (
    <div className='Sell'>
        <div className='row flex flex-col justify-center items-center gap-5'>
            <h1 className="text-4xl font-bold mb-6 text-white pt-9">Sell or trade in your<br/> car with us</h1>
            <form className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10 ">
            <span className="text-xl font-bold mb-6 text-red-600 ">Registration plate</span>
            <span className="text-xl font-bold mb-6 text-red-600 ">VIN number</span>
            <hr/>
            <p  className="text-sm  mb-6 text-gray-600 ">Enter your registration plate and state of
registration. We will get in touch with an offer.</p>
            <input
                id="Registration plate"
                className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                type="text"
                placeholder="Registration plate"
                required=""
            />
            <input
                id="State of registration"
                className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                type="text"
                placeholder="State of registration"
                required=""
            />
           
            <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">
                Continue
            </button>
           
</form>

        </div>
    </div>
  )
}

export default HeroSell