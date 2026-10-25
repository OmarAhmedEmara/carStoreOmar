import React from 'react'

function FiveGreat() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-1  lg:grid-cols-2 gap-6 py-20 ">
        <div className=" row1">
          <h3 className="text-center font-bold text-xl text-red-700 mb-12">
            Five great things about finance
          </h3>
          <div className="grid xs:grid-cols-1  md:grid-cols-3 gap-6 ">
            <div>
              <h3 className="text-lg font-bold ">Competitive interest rates</h3>
              <p className="text-sm font-bold text-gray-400">
                Generally lower than a personal loan because they’re secured
                against the car
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold ">Flexible repayment terms</h3>
              <p className="text-sm font-bold text-gray-400">
                Pick terms suit with optio reduce repayments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold ">Low deposit loans</h3>
              <p className="text-sm font-bold text-gray-400">
                Minimum $500, subject status.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold ">Tax efficiency</h3>
              <p className="text-sm font-bold text-gray-400">
                If business, financing can boost cash flow unlock advantages tax
                time. Ask accountant details.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold ">Cash preservation</h3>
              <p className="text-sm font-bold text-gray-500">
                Accessing finance means you don’t need to dip into your savings.
              </p>
            </div>
          </div>
        </div>

        <div className="row2">
          <img
            className="rounded-2xl"
            src="/img/FiveGreatThingsAboutFinance.jpg.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default FiveGreat