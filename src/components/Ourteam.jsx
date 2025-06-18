import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { FaShareAlt } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Ourteam = () => {
  return (
    <div >
      <div  className="flex flex-col justify-center p-14 text-blue-950  space-y-10 h-screen w-[90%] mt-5 mx-auto">
        <p className="font-bold text-orange-400">MEET OUR TEAM</p>
        <div className="grid grid-cols-2">
            <h1 data-aos='fade-right' className="lg:text-4xl  w-[700px]  font-bold">
          Financial Expertise You<br/>
Can Trust
        </h1>
        <p>Our power of choice is untrammelled and when nothing preven tsbeing able to do what we like best every pleasure.</p>
        </div>

        {/* Card */}
        <div data-aos='fade-down' className="flex gap-10  justify-center">
          <div className=" w-[290px]  rounded-2xl border border-gray-300 font-medium relative">
            <img
              src="./emp-1.jpg"
              className="w-[290px] h-[290px] object-cover rounded-t-2xl rounded-bl-[100px] "
              alt=""
            />
             <IoMdShare  className="absolute bg-white p-3  text-5xl rounded-full  text-blue-950 right-5 top-5" />
             

            <div className="flex px-4 py-5 space-y-3 justify-around items-center">
              <div>
                <p className="text-2xl">Business Consulting</p>
                <p className="text-orange-400"> Business Strategy</p>
              </div>

            
            </div>
          </div>
          <div className="w-[290px]  rounded-2xl border border-gray-300 font-medium relative">
            <img
              src="./emp-2.jpg"
              className="w-[290px] h-[290px] object-cover rounded-t-2xl rounded-bl-[100px] "
              alt=""
            />
            <IoMdShare  className="absolute bg-white p-3  text-5xl rounded-full  text-blue-950 right-5 top-5" />
            <div className="flex px-4 py-5 space-y-3 justify-around items-center">
              <div>
                <p className="text-2xl">Digital Agency</p>
                <p className="text-orange-400">Business Services</p>
              </div>

            
            </div>
          </div>
          <div className="w-[290px]  rounded-2xl border border-gray-300 font-medium relative">
            <img
              src="./emp-3.jpg"
              className="w-[290px] h-[290px] object-cover rounded-t-2xl rounded-bl-[100px] "
              alt=""
            />
            <IoMdShare  className="absolute bg-white p-3  text-5xl rounded-full  text-blue-950 right-5 top-5" />
            <div className="flex px-4 py-5 space-y-3 justify-around items-center">
              <div>
                <p className="text-2xl">Inventory Management</p>
                <p className="text-orange-400">Inventory Tracking</p>
              </div>

              
            </div>
          </div>
          <div className="w-[290px]  rounded-2xl border border-gray-300 font-medium relative">
            <img
              src="./emp-4.jpg"
              className="w-[290px] h-[290px] object-cover rounded-t-2xl rounded-bl-[100px] "
              alt=""
            />
            <IoMdShare  className="absolute bg-white p-3  text-5xl rounded-full  text-blue-950 right-5 top-5" />

            <div className="flex px-4 py-5 space-y-3 justify-around items-center">
              <div>
                <p className="text-2xl">Business Accounting</p>
                <p className="text-orange-400">Financing Management</p>
              </div>

           
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Ourteam;
