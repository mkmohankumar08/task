import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div data-aos="fade-down" className="py-12 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="flex flex-col items-center text-blue-950 space-y-10">
        <p className="font-bold text-orange-400 text-xs sm:text-sm md:text-base">
          OUR PROJECTS
        </p>

        <h1
          data-aos="fade-right"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-snug"
        >
          Let’s Discover All Our Clients' Recent Projects
        </h1>

        {/* Cards Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {[
            { title: "Business Consulting", subtitle: "Business Strategy" ,image:"./Project-01.jpg"},
            { title: "Digital Agency", subtitle: "Business Services" ,image:"./Project-02.jpg"},
            { title: "Inventory Management", subtitle: "Inventory Tracking" ,image:"./Project-03.jpg"},
            { title: "Business Accounting", subtitle: "Financing Management",image:"./Project-04.jpg" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 font-medium relative bg-white shadow hover:shadow-md transition"
            >
              {/* <img
                src="./Customer01.jpg"
                alt={item.title}
                className="w-full h-52 sm:h-60 object-cover rounded-t-2xl rounded-bl-[100px] hover:bg-amber-300 duration-300"
              /> */}
              <div className="relative group rounded-t-2xl rounded-bl-[100px] overflow-hidden">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-52 sm:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-amber-300 opacity-0 group-hover:opacity-25 transition duration-300" />
  </div>
              <div className="flex justify-between items-center px-4 py-5">
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl">{item.title}</p>
                  <p className="text-orange-400 text-xs sm:text-sm md:text-base">
                    {item.subtitle}
                  </p>
                </div>
                <MdOutlineArrowOutward className="bg-sky-50 border border-gray-300 rounded-full h-10 w-10 sm:h-12 sm:w-12 p-2 text-blue-950" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left pt-10 max-w-5xl w-full">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We successfully cope with tasks of varying complexity, <br className="hidden sm:inline" />
            provide long-term guarantees and regularly deliver results.
          </p>
          <button className="rounded-lg bg-orange-400 py-2 px-5 text-white flex items-center gap-2 hover:bg-orange-500 transition">
            SEE ALL PROJECTS <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
