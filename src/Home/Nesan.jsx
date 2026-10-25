import React from 'react'

function Nesan() {
  return (
    <div>
      <div className="container ">
        <h1 className="font-bold text-3xl pt-5">New cars every day</h1>
        <div className="row  grid xs:grid-cols-1 md:grid-cols-3  gap-5  ">
          {/* Card */}
          <div className="  border border-card-line shadow-2xs rounded-xl">
            <img
              className="w-full h-auto rounded-t-xl"
              src="/img/div.ProductCard_imageInner__2_cn9.png"
              alt="Card Image"
            />
            <div className="p-4  ">
              <h3 className="font-bold text-red-700 text-xl">
                2018 MINI 5D HATCH
              </h3>
              <p>COOPER</p>
              <p> 22,574 km + Automatic</p>
              <h3 className="font-bold text-red-700 text-xl">$36,990</h3>
              <p>est. $182/wk based on 10.02% p.a.</p>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="  border border-card-line shadow-2xs rounded-xl">
            <img
              className="w-full h-auto rounded-t-xl"
              src="/img/span (14).svg"
            />
            <div className="p-4  ">
              <h3 className="font-bold text-red-700 text-xl">
                2019 HYUNDAI I30
              </h3>
              <p>LUXURY</p>
              <p>45,600 km + Automatic</p>
              <h3 className="font-bold text-red-700 text-xl">$70,990</h3>
              <p>est. $348/wk based on 10.02% p.a.</p>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="  border border-card-line shadow-2xs rounded-xl">
            <img
              className="w-full h-auto rounded-t-xl"
              src="/img/div.ProductCard_imageInner__2_cn9 (2).png "
              alt="Card Image"
            />
            <div className="p-4  ">
              <h3 className="font-bold text-red-700 text-xl">
                2021 FORD RANGER
              </h3>
              <p>ACTIVE</p>
              <p>51,291 km + Automatic</p>
              <h3 className="font-bold text-red-700 text-xl">$22,990</h3>
              <p>est. $113/wk based on 10.02% p.a.</p>
            </div>

            {/* Card */}

            {/* End Card */}
          </div>
          {/* End Card */}

          <div className="flex flex-col justify-center  text-center py-5">
            <a className=" bg-violet-700 text-white  py-5 rounded-xl font-bold">
              Browse(733)cars
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nesan