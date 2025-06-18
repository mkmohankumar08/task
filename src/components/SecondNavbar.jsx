import React from 'react';
import { FaAngleDown, FaSearch, FaMoon } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { HiMenu } from "react-icons/hi"; // Hamburger icon for mobile

const SecondNavbar = () => {
  return (
    <div className="bg-gray-100 backdrop-blur-md w-full ">
      <div className="flex flex-wrap items-center justify-between p-5 pl-10">
        
        {/* Logo */}
        <div>
          <p className="text-3xl text-blue-950 font-bold">APexa</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 items-center font-medium text-blue-950">
          <li className="flex items-center text-[18px] gap-2">Home <FaAngleDown /></li>
          <li className="flex items-center text-[18px] gap-2">About Us <FaAngleDown /></li>
          <li className="flex items-center text-[18px] gap-2">Services <FaAngleDown /></li>
          <li className="flex items-center text-[18px] gap-2">Pages <FaAngleDown /></li>
          <li className="flex items-center text-[18px] gap-2">Blog <FaAngleDown /></li>
          <li className="flex items-center text-[18px] gap-2">Contact</li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex gap-4 items-center">
          <FaSearch className="text-xl text-blue-950" />
          <p className="bg-white p-4  rounded-xl shadow-sm">
            <FaMoon className="text-xl text-blue-950" />
          </p>
          <p className="bg-white p-4 rounded-xl shadow-sm">
            <CgMenuGridO className="text-xl text-blue-950" />
          </p>
          <p className="bg-orange-400 py-4 px-6 rounded-xl text-white font-medium">
            LET'S TALK
          </p>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden pr-5">
          <HiMenu className="text-3xl text-blue-950" />
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
