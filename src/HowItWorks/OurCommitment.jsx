import React from 'react'

function OurCommitment() {
  return (
    <div className=" bg-[#E83657]">
      <div className="container md:px-14">
        <div className="row grid xs:grid-cols-1 md:grid-cols-2 gap-4 sm:px-5 py-20 ">
          <div className="md:py-20">
            <h3 className="  text-xl text-white font-bold ">
              Our commitment to quality
            </h3>
            <img className=" w-[500px] md:w-[350px]" src="/img/Aside.svg" />
          </div>
          <div className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-5 ">
            <div>
              <img className="w-[50px]" src="/img/span (5).png" />
              <h3 className="  text-lg text-white font-bold ">Only the best</h3>
              <p className="text-sm  font-bold text-gray-400">
                Across a wide range of makes and <br />
                models, we source cars of the <br />
                highest quality.
              </p>
            </div>
            <div>
              <img className="w-[50px]" src="/img/span (10).png" />
              <h3 className="  text-lg text-white font-bold ">
                We own all our cars
              </h3>
              <p className="text-sm  font-bold text-gray-400">
                We’re no marketplace own <br />
                cars vouch every
                <br />
                one them.
              </p>
            </div>
            <div>
              <img className="w-[50px]" src="/img/omar.png" />
              <h3 className="  text-lg text-white font-bold ">
                Tested by experts
              </h3>
              <p className="text-sm  font-bold text-gray-400">
                Every car passes a 300 point check
                <br />
                inspected test-driven <br />
                certified technicians.
              </p>
            </div>
            <div>
              <img className="w-[50px]" src="/img/span (1).png" />
              <h3 className="  text-lg text-white font-bold ">
                Complete reconditioning
              </h3>
              <p className="text-sm  font-bold text-gray-400">
                Quality detailing complete
                <br />
                conditioning means car arrives <br />
                better condition found{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCommitment