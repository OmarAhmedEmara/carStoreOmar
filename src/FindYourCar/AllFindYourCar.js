import React, { useContext, useState } from 'react'
import AllCompo from '../Components/AllCompo'
import AllFooter from '../Components/AllFooter'
import { CartProvider, useCart } from 'react-use-cart'
import { apiValue } from '../Data/AllData'
import { NavLink, Link } from 'react-router'


function Page() {

    const { addItem } = useCart();
    const data = useContext(apiValue);
    const [search, setSearch] = useState("All");
    const getValue = (bodyType) => {
        setSearch(bodyType);
    }

    return (
        <div>
            <div className='section findyourcars '>
                <div className='container'>
                    <div className=' flex items-center justify-center py-20'>
                        <ul className="cars-filter flex bg-yellow-900 justify-center flex-wrap gap-6 px-6 py-3 rounded-lg cursor-pointer md:text-lg md:font-semibold xs:text-sm ">
                            <li>
                                <button className={`bg-yellow-100 py-1 px-4 ${search === "All" ? "border-b-4 border-yellow-600 dark:border-blue-500" : ""} dark:border-blue-500 hover:border-b-4 hover:border-yellow-600 rounded-md`} onClick={() => getValue("All")} >
                                    Show ALL
                                </button>
                            </li>

                            <li>

                                <button className={`bg-yellow-100 py-1 px-4 ${search === "SUV" ? "border-b-4 border-yellow-600 dark:border-blue-500" : ""} dark:border-blue-500 hover:border-b-4 hover:border-yellow-600 rounded-md`} onClick={() => getValue("SUV")}>
                                    Suv
                                </button>
                            </li>
                            <li>
                                <button className={`bg-yellow-100 py-1 px-4 ${search === "Sedan" ? "border-b-4 border-yellow-600 dark:border-blue-500" : ""} dark:border-blue-500 hover:border-b-4 hover:border-yellow-600 rounded-md`} onClick={() => getValue("Sedan")}>
                                    Sedan
                                </button>
                            </li>
                            <li>
                                <button className={`bg-yellow-100 py-1 px-4 ${search === "Hatchback" ? "border-b-4 border-yellow-600 dark:border-blue-500" : ""} dark:border-blue-500 hover:border-b-4 hover:border-yellow-600 rounded-md`} onClick={() => getValue("Hatchback")}>

                                    Hatchback
                                </button>
                            </li>
                            <li>
                                <button className={`bg-yellow-100 py-1 px-4 ${search === "Ute" ? "border-b-4 border-yellow-600 dark:border-blue-500" : ""} dark:border-blue-500 hover:border-b-4 hover:border-yellow-600 rounded-md`} onClick={() => getValue("Ute")}>

                                    Ute
                                </button>
                            </li>

                        </ul>

                    </div>



                    <div className=' car-box  grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1     gap-9'>
                        {data.map((item) => {
                            return search === "All" ? (
                                <div className='card' key={item.id}>

                                    <div className="  card-inner bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105">
                                        <img
                                            className="w-full h-auto rounded-t-xl"
                                            src={item.images && item.images[0]}
                                            alt={item.title}
                                        />
                                        <div className="p-4  ">
                                            <div className='flex justify-around text-xl font-bold text-red-700'>
                                                <span className="category">{item.make}</span>
                                                <h6>${item.price}</h6>
                                            </div>
                                            <h6 className='text-xl font-bold text-orange-500 text-center'>{item.title}</h6>
                                            <h6 className='text-lg font-bold text-orange-500 text-center'>{item.year}</h6>


                                            <ul className='text-sm text-gray-700'>
                                                <li >
                                                    bodyType: <span>{item.bodyType}</span>
                                                </li>
                                                <li>
                                                    Color: <span>{item.colour}</span>
                                                </li>



                                                <li>
                                                    Id: <span>{item.id}</span>
                                                </li>

                                            </ul>

                                            <div className='flex flex-col py-7'>
                                                <Link className=' text-center relative p border-2 border-teal-600 rounded px-4 py-2  inline cursor-pointer text-xl font-bold before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100' to={`/singlecars/${item.id}`}
                                                >Details</Link>
                                                <button type="button" className='  mt-8 inline-flex items-center justify-center rounded-xl bg-violet-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-violet-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]' onClick={() => addItem(item)}>Add To Cart </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ) : item.bodyType === search ? (
                                <div className='card' key={item.id}>

                                        <div className="  card-inner bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105">
                                            <img
                                                className="w-full h-auto rounded-t-xl"
                                                src={item.images && item.images[0]}
                                                alt={item.title}                                            />
                                            <div className="p-4  ">
                                                <div className='flex justify-around text-xl font-bold text-red-700'>
                                                <span className="category">{item.make}</span>
                                                <h6>${item.price}</h6>
                                                </div>
                                            <h6 className='text-xl font-bold text-orange-500 text-center'>{item.title}</h6>
                                            <h6 className='text-lg font-bold text-orange-500 text-center'>{item.year}</h6>


                                                <ul className='text-sm text-gray-700'>
                                                    <li >
                                                        bodyType: <span>{item.bodyType}</span>
                                                    </li>
                                                    <li>
                                                        Color: <span>{item.colour}</span>
                                                    </li>



                                                    <li>
                                                        Id: <span>{item.id}</span>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                </div>
                            ) : null
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}



function AllFindYourCar() {
    return (
        <CartProvider>
            <AllCompo />
            <Page />
            <AllFooter />
        </CartProvider>
    )
}

export default AllFindYourCar