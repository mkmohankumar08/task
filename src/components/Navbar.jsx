import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-blue-950 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-3 text-amber-50 font-medium gap-2 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <FiPhoneCall className="shrink-0" />
            <span className="text-sm sm:text-base">+123 9898 500</span>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationOutline className="shrink-0" />
            <span className="text-sm sm:text-base">256 Avenue, Mark Street, NewYork City</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 md:mt-0">
          <div className="flex items-center gap-2">
            <CiMail className="shrink-0" />
            <span className="text-sm sm:text-base">info@apexa.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MdAccessTime className="shrink-0" />
            <span className="text-sm sm:text-base">Mon-Fri: 10:00am - 09:00pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
