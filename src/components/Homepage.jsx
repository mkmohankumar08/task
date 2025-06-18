import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const Homepage = () => {
  return ( 
   <div className="h-screen bg-hero">
     <div data-aos="fade-up" className="flex font-semibold  items-center">
      <div  className="flex justify-center flex-col  items-end ">
        <ul className="text-blue-950 space-y-5 flex flex-col   items-center">
          <li>
            <p className="transform -rotate-90 m-10">---FOLLOW US</p>
          </li>
          <li>
            <FaLinkedinIn className="transform -rotate-90" />
          </li>
          <li>
            <FaPinterestP className="transform -rotate-90" />
          </li>
          <li>
            <FaInstagram className="transform -rotate-90" />
          </li>
          <li>
            <FaTwitter className="transform -rotate-90" />
          </li>
          <li>
            <FaFacebookF className="transform -rotate-90" />
          </li>
        </ul>
      </div>

      <div  className="font-medium text-blue-950 text-xl space-y-5 py-32 ">
        <p className="text-orange-400 ">WE ARE EXPERT IN THIS FIELD</p>
        <p className="text-6xl font-bold">
          Business Consulting <br /> All Solutions
        </p>
        <p className="font-normal *:">
          Apexa helps you to convert your data into a strategic asset and get{" "}
          <br /> business insights Apexa helps you to convert your data into
          asset <br /> and get top-notch business insights.
        </p>
        <button className="rounded-lg bg-orange-400 p-3 pl-5 text-white flex items-center gap-2 hover:bg-blue-950 hover:text-white ">
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
   </div>
  );
};

export default Homepage;
