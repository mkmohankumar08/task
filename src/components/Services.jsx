import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";

const Services = () => {
 const Data = [
  { Title: "Strategic marketing" },
  { Title: "Investment Planning" },
  { Title: "Insights & analytics" },
  { Title: "Business consulting" }
];

  return (
    <div data-aos="fade-down" className="py-16 px-4 md:px-12 bg-white">
      <div className="flex flex-col justify-center items-center text-blue-950 space-y-10">
        <p className="font-bold text-orange-400 text-sm md:text-base">
          WHAT WE OFFER
        </p>

        <h1
          data-aos="fade-right"
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold max-w-3xl"
        >
          We Offer An Effective Wide Area Business Solutions
        </h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="w-[300px] bg-white rounded-2xl shadow-2xl font-medium relative"
            >
              <img
                src="./Customer01.jpg"
                className="w-full h-[200px] object-cover rounded-t-2xl rounded-bl-[100px]"
                alt="Service"
              />

              <LuSettings className="absolute bg-gray-200 border-4 border-white p-4 text-6xl sm:text-7xl rounded-full text-blue-950 left-5 top-36" />

              <div className="px-4 py-5 space-y-3">
                <p className="text-xl sm:text-2xl">Strategic marketing</p>
                <p className="text-sm text-gray-600">
                  Morem ipsum dolor sittemet consectetur adipiscing.
                </p>
                <button className="rounded-lg bg-gray-200 py-2 px-4 flex items-center gap-2 text-blue-950 hover:bg-blue-900 hover:text-white transition duration-300">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Call-to-Action */}
        <div className="flex flex-col md:flex-row items-center gap-6 pt-8 text-center md:text-left">
          <p className="text-sm md:text-base text-gray-700">
            Empowering Businesses through Strategic Consulting With Us
          </p>
          <button className="rounded-lg bg-orange-400 py-2 px-5 text-white flex items-center gap-2">
            SEE ALL SERVICES <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
