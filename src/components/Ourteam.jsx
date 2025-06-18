import React from "react";
import { IoMdShare } from "react-icons/io";

const Ourteam = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center px-4 md:px-10 lg:px-20 py-10 text-blue-950 space-y-10 w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <p className="font-bold text-orange-400 text-sm md:text-base">MEET OUR TEAM</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h1
            data-aos="fade-right"
            className="text-2xl md:text-4xl font-bold leading-snug"
          >
            Financial Expertise You<br /> Can Trust
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure.
          </p>
        </div>

        {/* Team Cards */}
        <div
          data-aos="fade-down"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {/* Card Component */}
          {[
            {
              image: "./emp-1.jpg",
              title: "Business Consulting",
              subtitle: "Business Strategy",
            },
            {
              image: "./emp-2.jpg",
              title: "Digital Agency",
              subtitle: "Business Services",
            },
            {
              image: "./emp-3.jpg",
              title: "Inventory Management",
              subtitle: "Inventory Tracking",
            },
            {
              image: "./emp-4.jpg",
              title: "Business Accounting",
              subtitle: "Financing Management",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="w-full rounded-2xl border border-gray-300 font-medium relative bg-white overflow-hidden"
            >
              <img
                src={member.image}
                className="w-full h-[280px] object-cover rounded-t-2xl rounded-bl-[100px]"
                alt={member.title}
              />
              <IoMdShare className="absolute bg-white p-3 text-5xl rounded-full text-blue-950 right-4 top-4 shadow-md" />

              <div className="px-4 py-5">
                <p className="text-xl font-semibold">{member.title}</p>
                <p className="text-orange-400 text-sm">{member.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
