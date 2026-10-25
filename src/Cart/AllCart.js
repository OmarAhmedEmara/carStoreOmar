import React from 'react'
import { CartProvider ,useCart } from 'react-use-cart'
import AllCompo from '../Components/AllCompo';
import AllFooter from '../Components/AllFooter';
function Cart(){
    const {items,updateItemQuantity,removeItem,totalItems,totalUniqueItems,cartTotal,emptyCart,isEmpty }=useCart();
   
  return (

    <div className="px-4 md:px-8 mt-6">
  <div className="max-w-4xl mx-auto lg:max-w-7xl">
    <div className="mb-12">
          <h1 className="text-2xl font-bold text-violet-900">buyer car Cart{totalUniqueItems}</h1>
    </div>
    <div className="grid lg:grid-cols-3 gap-4 relative">
          <ul className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              return (
        <li className="p-6 bg-white border border-slate-300 rounded-md relative">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="w-52 h-52 shrink-0">
              <img
                        src={item.images}
                className="w-full h-full object-contain"
                alt="Thinkpad e16"
              />
            </div>
            <div className="w-full sm:border-l sm:pl-6 sm:border-slate-300">
                      <h1 className="text-base font-semibold text-red-500">
                        {item.title}
                      </h1>
                      <span className="text-base font-bold text-red-500">
                        ${Math.ceil(item.price * item.quantity)}
                      </span>
                      <span className="text-base font-bold text-red-500">
                        {item.make}
                      </span>
                      <h3 className="text-base font-bold text-red-500">
                        {item.bodyType}
                      </h3>

              <ul className="mt-4 text-sm text-slate-600 font-normal space-y-2">
                        <li>{item.slug}</li>

                        <li>  


                </li>
              </ul>
              <hr className="border-slate-300 my-6" />
              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* Quantity Selector */}
                        <h2 className="text-base font-semibold text-slate-900">{item.quantity}</h2>
                        <div className="flex items-center gap-2">

                          <button className='bg-orange-400 text-white py-1 px-3 rounded-md' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                          <button className='bg-green-400 text-white py-1 px-3 rounded-md' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                          <button className='bg-red-600 text-white py-1 px-3 rounded-md' onClick={() => removeItem(item.id)}>&times;</button>
                        </div>
                  {/* Remove button */}
                  <button
                    type="button"
                    aria-label="Remove HP ProBook 455 from cart"
                    className="absolute top-3.5 right-3.5 w-max cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3 shrink-0 fill-gray-400 hover:fill-red-500"
                      viewBox="0 0 320.591 320.591"
                    >
                      <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"
                      />
                      <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

                </li>

              )
            })}
      </ul>
      {/* Order Summary */}
      <div className="sticky top-0 h-max">
        <div className="bg-white rounded-md p-6 border border-slate-300">
          <h3 className="text-base font-semibold text-slate-900">
            Order Summary
          </h3>
          <ul className="text-slate-600 font-medium text-sm divide-y divide-slate-300 mt-4">
            <li className="flex flex-wrap gap-4 py-3">
              Subtotal{" "}
              <span className="ml-auto font-semibold text-slate-900">
                    ${Math.ceil(cartTotal)}
                  </span>
                </li>

                <li className="flex flex-wrap gap-4 py-3">
                  Total Quantity{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    ${totalItems}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 py-3">
              Shipping{" "}
              <span className="ml-auto font-semibold text-slate-900">
                $4.00
              </span>
            </li>
            <li className="flex flex-wrap gap-4 py-3">
              Tax{" "}
              <span className="ml-auto font-semibold text-slate-900">
                $4.00
              </span>
            </li>
            <li className="flex flex-wrap gap-4 py-3 font-semibold text-slate-900">
              Total
                  <span className="ml-auto">${Math.ceil(cartTotal + 8.00)}</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 w-full px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Proceed to Checkout
          </button>
        </div>
        {/* Payment Methods */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <img
            src="https://readymadeui.com/images/master.webp"
            alt="card1"
            className="w-10 object-contain"
          />
          <img
            src="https://readymadeui.com/images/visa.webp"
            alt="card2"
            className="w-10 object-contain"
          />
          <img
            src="https://readymadeui.com/images/american-express.webp"
            alt="card3"
            className="w-10 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</div>










            
       
  )
}
function AllCart() {
  return (
    <CartProvider>
      <AllCompo/>      
       <Cart/>
      <AllFooter/> 
    </CartProvider>
  )
}

export default AllCart