import React from 'react'

function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="row  grid xs:grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 md:gap-5 py-16 xl:px-20 xl:py-20 ">
          <div className=" ">
            <h3 className="text-gray-900 text-xl font-semibold ml-2 mt-4">
              Why Carma?
            </h3>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
              A better way to buy a pre-loved car-entirely online
            </p>
          </div>

          <div className="">
            <div className="flex items-center">
              <img
                className="w-[50px]"
                src="/img/span (5).png"
                alt="officeImage"
              />
              <h3 className="text-gray-900 text-xl font-semibold ml-2 mt-4">
                We buy the highest quality cars
              </h3>
            </div>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
              We own every car we sell and our extensive range of quality
              pre-loved cars is meticulously selected by experts. From
              hatchbacks and hybrids to 4x4s and more, we’ve got Australia’s
              most popular models, competitively priced.
            </p>
          </div>

          <div className="">
            <div className="flex items-center">
              <img className="w-[50px]" src="/img/omar.png" alt="officeImage" />
              <h3 className="text-gray-900 text-xl font-semibold ml-2 mt-4">
                The Carma touch
              </h3>
            </div>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
              Every Carma car is shown the love it deserves – tested and Carma
              Checklist checked, PPSR screened, fine-tuned, reconditioned and
              certified awesome.
            </p>
          </div>

          <div className="">
            <div className="flex items-center">
              <img className="w-[50px]" src="/img/omar.png" alt="officeImage" />
              <h3 className="text-gray-900 text-xl font-semibold ml-2 mt-4">
                Aussie owned and operated
              </h3>
            </div>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
              Australian owned and operated, our team is 100% onshore and
              experts in the local used car market.
            </p>
          </div>

          <div className="">
            <div className="flex items-center">
              <img
                className="w-[50px]"
                src="/img/span (1).png"
                alt="officeImage"
              />
              <h3 className="text-gray-900 text-xl font-semibold ml-2 mt-4">
                We've got you covered
              </h3>
            </div>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
              We may be an online retailer, but you can still pick up the phone
              and talk to a real person when you need to, before, during or
              after your purchase. We even include NRMA Roadside Assistance.
            </p>
          </div>

          <div className="">
            <div className="flex items-center">
              <img
                className="w-[50px]"
                src="/img/span (8).png"
                alt="officeImage"
              />
              <h3 className="text-gray-900 text-xl font-semibold ml-2 mt-4">
                Pay your way
              </h3>
            </div>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
              Not only are our cars great value, we also have flexible payment
              options to suit your needs. Finance through us or pay outright,
              our finance team are here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About