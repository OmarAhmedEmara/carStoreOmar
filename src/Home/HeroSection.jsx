import React from 'react'

function HeroSection() {
  return (
    <header className="bg-[#D2E0E9]">
      <div className="container ">
        <div className="row grid xs:grid-cols-1 md:grid-cols-2  py-20 ">
          <div className="flex flex-col justify-center gap-2">
            <h3 className="  text-4xl  font-bold text-red-700 pb-5 ">
              The Intelligent
              <br />
              Buyer Saves
            </h3>
            <div className="flex  gap-2">
              <img src="/img/Icon.svg" alt="" />
              <p className="text-sm ">One Place Car Purchasing</p>
            </div>

            <div className="flex  gap-2">
              <img src="/img/Icon.svg" alt="" />
              <p className="text-sm ">Real time dealer pricing new vehicles</p>
            </div>
            <hr />
            <div className="flex  gap-2">
              <img src="/img/Icon.svg" alt="" />
              <p className="text-sm ">Quick pre-approval credit application</p>
            </div>
            <hr />
            <div className="flex  gap-2">
              <img src="/img/Icon.svg" alt="" />
              <p className="text-sm ">Quote protection packages warranties</p>
            </div>
            <hr />
            <div className="flex  gap-2">
              <img src="/img/Icon.svg" alt="" />
              <p className="text-sm ">Get estimates on insurance</p>
            </div>
            <hr />
            <div className="flex  gap-2">
              <img src="/img/Icon.svg" alt="" />
              <p className="text-sm ">Trade-in value used car</p>
            </div>
          </div>
          <div>
            <div className="flex  py-20 gap-2 ">
              <img className="w-[99px]" src="/img/Block.svg" alt="" />
              <img className="w-[99px]" src="/img/Block (1).svg" alt="" />
              <img className="w-[99px]" src="/img/Block (2).svg" alt="" />
            </div>
            <div className="md:w-[350px]">
              <img src="/img/Car Model.svg" alt="" />
            </div>
            <div className=" grid xs:grid-cols-3 md:grid-cols-4  gap-5">
              <img src="/img/Back.svg" />
              <img src="/img/Block (3).svg" />
              <img src="/img/Block (4).svg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection