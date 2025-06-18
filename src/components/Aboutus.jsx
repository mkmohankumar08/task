import RotatingCircle from "@/pages/RotatingCircle";
import Image from "next/image";
import { FaBullseye, FaChartLine } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

export default function Aboutus() {
  return (
    <section
      data-aos="fade-up"
      className=" flex relative  py-20 px-6 md:px-16 overflow-hidden "
    >
      {/* Background pattern */}
      <div className="bg-blue-200 absolute left-0 top-0 w-full h-full bg-[url('/pattern-lines.svg')] bg-no-repeat bg-left-bottom opacity-10 z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Block */}
        <div className=" mx-auto relative">
          
          <div className="absolute -bottom-[55px] left-[140px] z-20">
        <RotatingCircle />
         </div>

          <img
            src="./About.png" // image in public folder
            alt="Team Meeting"
            width={400}
            height={400}
            className="rounded-[3rem_3rem_0_3rem] "
          />
          

          <div className="absolute bottom-[-60px] left-[135px] w-32 h-32 bg-yellow-400 rounded-full border-[30px] border-blue-950 flex flex-col justify-center items-center text-center shadow-md">
            <div className="bg-yellow-400 p-2 rounded-full">
              <GiTrophyCup className="text-5xl text-white" />
            </div>
            
          </div>
          
        </div>
        

        {/* Content Block */}
        <div>
          <p className="text-yellow-500 font-semibold mb-2">
            SIMPLY KNOW ABOUT
          </p>
          <h2
            data-aos="fade-right"
            className="text-4xl font-bold text-blue-900 leading-tight mb-6"
          >
            We Help Organizations To <br /> Make Ultimate Businesses <br />{" "}
            Growth Success.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-yellow-100 p-4 rounded-lg flex space-x-3 items-start">
              <div className="text-yellow-600 text-2xl">
                <FaBullseye />
              </div>
              <div>
                <h4 className="font-bold text-blue-900">Business Solutions</h4>
                <p className="text-sm text-gray-600">
                  Semper egetuis tellus urna condi
                </p>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg flex space-x-3 items-start">
              <div className="text-yellow-600 text-2xl">
                <FaChartLine />
              </div>
              <div>
                <h4 className="font-bold text-blue-900">Quality Services</h4>
                <p className="text-sm text-gray-600">
                  Semper egetuis tellus urna condi
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            We successfully cope with tasks of varying complexity, provide
            long-term guarantees and regularly master new practice areas. Our
            portfolio includes dozen.
          </p>

          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-3">
              <Image
                src="/user.jpg"
                alt="CEO"
                width={70}
                height={70}
                className="rounded-full object-cover"
              />

              <div>
                <p className="text-blue-900 font-bold leading-tight">
                  Martinaze
                </p>
                <p className="text-sm text-gray-600">CEO</p>
              </div>
            </div>

            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center space-x-2">
              <span>READ MORE</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
