import React from 'react'

function CarmaWorks() {
  return (
    <div className="bg-gray-200">
      <div className="container">
        <h1 className="  text-4xl  text-center text-red-700 font-bold pt-20">
          How Carma works
        </h1>
        <div className=" row grid xs:grid-cols-1 md:grid-cols-3 py-20 gap-4">
          <div>
            <img className="md:w-[350px]" src="/img/findCar.png.svg" />
            <h3 className="  text-xl  font-bold ">
              Find and reserve your perfect car
            </h3>
            <p className="text-sm  font-bold text-gray-400">
              Whatever make or model, find and reserve your perfect car from our
              full range of high quality preloved cars.
            </p>
          </div>
          <div>
            <img
              className="md:w-[350px]"
              src="/img/div.HowCarmaWorks_imgContainer__3Wklx.svg"
            />
            <h3 className="  text-xl  font-bold ">
              Payments, financing, trade in. We’re here to help.
            </h3>
            <p className="text-sm  font-bold text-gray-400">
              We know everyone’s car buying experience is a little different.
              Financing, buying outright, trading in - we’re here to help make
              the process smooth and enjoyable.
            </p>
          </div>
          <div>
            <img className="md:w-[350px]" src="/img/span (1).svg" />
            <h3 className="  text-xl  font-bold ">
              Choose free delivery or collect, then start driving
            </h3>
            <p className="text-sm  font-bold text-gray-400">
              Once you're ready, you can choose to have your car delivered for
              free to your door, or collect it from our convenient location in
              Alexandria, Sydney.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarmaWorks