import React from 'react'
import { IoMdCart } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from 'react-router'
function Navbar() {
    const [isOpenMenu,setOpenMenu] =useState(false);
  return (
    <div>
      <nav className="bg-yellow-50 px-4 py-5">
        <div className="max-w-[1200px] mx-auto justify-between flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4">
            <NavLink to="/">
              <img src="/img/Logo.svg" alt="Logo" />
            </NavLink>
          </div>
          {/* Links */}

          <ul className="hidden lg:flex items-center gap-6 text-violet-950 xl:text-base md:text-xs font-bold">
            <li className="hover: text-violet-400 cursor-pointer">
              <NavLink to="/FindCars" class="block">
                Find your car
              </NavLink>
            </li>
            <li>
              <NavLink to="/SellOrTradeIn" className="block">
                Sell trade in
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/HowItWorks" className="block">
                How works
              </NavLink>
            </li>
            <li>
              <NavLink to="/Carsfinance" className="block">
                {" "}
                Car finance
              </NavLink>
            </li>
          </ul>

          {/* Search Cars */}
          <div className="hidden lg:flex items-centerpy-3 px-4">
            <input
              type="text"
              placeholder="Search Cars"
              className="w-full py-4 rounded-lg shadow-2xl pl-10 border-gray-950 outline-none focus:text-violet-300 focus:ring-2"
            />
          </div>
          {/* Cart shopping */}
          <div className="flex items-center bg-violet-700 px-9 gap-3 rounded-2xl">
            <Link to="/cart" className="flex items-center gap-3">
              <IoMdCart className="text-4xl text-white" />
              <span className="font-bold text-white text-xl">Cart</span>
            </Link>
          </div>
          {/* menu responsive   */}
          <button onClick={() => setOpenMenu(!isOpenMenu)}>
            <CiMenuFries className="flex lg:hidden text-3xl" />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 w-72 bg-white shadow-2xl h-screen px-4 z-50 transition-transform duration-500 ${isOpenMenu ? "translate-x-0" : "translate-x-full"} `}>
          <div className="flex justify-between items-center py-6 border-b-2">
            <h4 className="text-violet-600 font-bold">Menu</h4>
            <button onClick={() => setOpenMenu(false)}>
              <MdClose />
            </button>
          </div>
          <ul className="flex flex-col bg-gray-50 py-3 px-3 border-b-2 gap-6 text-violet-950 font-bold">
            <li>
              <NavLink to="/FindCars" class="block">
                Find your car
              </NavLink>
            </li>
            <li>
              <NavLink to="/SellOrTradeIn" class="block">
                Sell trade in
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/HowItWorks" class="block">
                How works
              </NavLink>
            </li>
            <li>
              <NavLink to="/Carsfinance" class="block">
                {" "}
                Car finance
              </NavLink>
            </li>
          </ul>

          {/* Search Cars */}
          <div className="relative">
            <FiSearch className="absolute top-1/2 translate-1/2 left-4 text-gray-600" />
            <input
              type="text"
              placeholder="Search Cars"
              className="w-full py-4 rounded-lg shadow-2xl border-gray-950 my-9 pl-10 outline-none focus:text-violet-300 focus:ring-2"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar