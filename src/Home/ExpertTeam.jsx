import React from 'react'

function ExpertTeam() {
  return (
    <div className="bg-[#150D2C] py-20">
      <div className="container bg-[#150D2C]">
        <div className="row  grid xs:grid-cols-1  md:grid-cols-2 gap-4 md:gap-5 ">
          <div className="text-white flex flex-col justify-center py-20">
            <h3 className="font-bold text-3xl">
              Our expert team
              <br />
              makes car finance <br />
              easier
            </h3>
            <p>
              Finance your car through Carma’s carefully selected panel of
              financiers. Every application is assigned a Carma finance
              consultant, who will help you throughout the whole process. Plus,
              you can contact us any time if you have a question or need help –
              even before you’ve submitted your application.
            </p>
          </div>
          <div className="rounded-lg">
            <img src="/img/Our_expert_team.jpg.png" />
          </div>
        </div>

        <div className=" grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 text-white font-bold py-10 px-10">
          <div className="flex  items-center">
            <img src="/img/Frame (1).png" />

            <span>
              Competitive carefully selected panel financiers offering flexible
              <br />
              repayment options.hassle haggle.
            </span>
          </div>

          <div className="flex items-center">
            <img src="/img/Frame (2).png" />

            <span>
              Obtain personalised quote selected car. Sign finance paperwork
              <br />
              convenience own home.
            </span>
          </div>

          <div className="flex items-center">
            <img src="/img/SVG.png" />

            <span>
              Submit application approximately 20 minutes. Decisions typically
              happen
              <br />
              same business day.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertTeam