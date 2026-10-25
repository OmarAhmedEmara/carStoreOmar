import React from 'react'

function Works() {
  return (
    <div className="pt-8 lg:py-20 lg:px-20 bg-gray-100">
      <div className="container ">
        <h1 className="text-center font-bold text-3xl text-red-700 mb-12">
          Here's how it works
        </h1>
        <div className="row  grid xs:grid-cols-1  md:grid-cols-1 md:gap-5 gap-6  md:px-14 ">
          <div className="flex flex-col md:flex-row justify-center pb-16 gap-10">
            <img
              className="w-[350px] lg:w-[300px] md:w-[250px]"
              src="/img/call-for-quote.jpg.png"
            />
            <div className="flex flex-col justify-center lg:w-[40%] ">
              <h3 className="font-bold text-xl text-violet-700">
                Call for a quote
              </h3>
              <p className="text-sm text-gray-500">
                Call us on 02 8319 3210 expert finance consultants questions and
                provide a personalised quote for your selected car We’ll hold
                car reserve with $500 refundable deposit.
              </p>
            </div>
          </div>
          <div className="flex  flex-col md:flex-row justify-center   pb-16 gap-10 ">
            <div className="flex flex-col  justify-center  lg:w-[40%] ">
              <h3 className="font-bold text-xl text-violet-700">
                Complete your application
              </h3>
              <p className="text-sm text-gray-500">
                {" "}
                expert finance consultants step through application questions.
                Typically,lender finance decision within next business day.
              </p>
            </div>
            <img
              className="w-[350px] lg:w-[300px] md:w-[250px] "
              src="/img/complete-your-application.jpg.svg"
            />
          </div>
          <div className="flex   flex-col md:flex-row justify-center   pb-16 gap-10">
            <img
              className="w-[350px] lg:w-[300px] md:w-[250px]"
              src="/img/sign-the-paperwork.jpg.png"
            />
            <div className="flex flex-col justify-center  lg:w-[40%] ">
              <h3 className="font-bold text-xl text-violet-700">
                Sign the paperwork
              </h3>
              <p className="text-sm text-gray-500">
                Once application is approved, financier will send paperwork
                online, ready sign comfort your home. Our finance consultants
                available offer assistance help.
              </p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row justify-center  pb-16  gap-10">
            <div className="flex flex-col justify-center  lg:w-[40%] ">
              <h3 className="font-bold text-xl text-violet-700">
                Ready for delivery or collection
              </h3>
              <p className="text-sm text-gray-500">
                Once your signed paperwork and any additional documents
                verified,lender will release the money new Carma car ready
                delivery or collection.
              </p>
            </div>
            <img
              className="w-[350px] lg:w-[300px] md:w-[250px]"
              src="/img/span (15).svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works