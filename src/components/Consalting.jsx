// File: components/WhyBestSection.jsx

import Image from 'next/image';
import { FaChartPie, FaChartBar } from 'react-icons/fa';

export default function Consulting() {
  return (
    <section className="bg-[#151875] text-white py-16 px-6 lg:px-20 relative overflow-hidden md:h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Content */}
        <div data-aos='fade-right'>
          <p className="text-yellow-400 font-semibold mb-2">WHY WE ARE THE BEST</p>
          <h2  className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Offer Business Insight <br />
            <span className="text-white">World Class Consulting</span>
          </h2>
          <p className="text-gray-200 mb-8">
            We successfully cope with tasks of varying complexity provide area longerty guarantees and
            regularly master new Practice. Following gies heur portfolio includes dozen.
          </p>

          <div className="space-y-6">
            {/* Business Solutions */}
            <div className="flex items-start space-x-4">
              <div className="text-yellow-400 text-3xl">
                <FaChartPie />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Business Solutions</h4>
                <p className="text-gray-300 text-sm">
                  Semper egetuis kelly for tellus urna area condition.
                </p>
              </div>
            </div>

            {/* Market Analysis */}
            <div className="flex items-start space-x-4">
              <div className="text-yellow-400 text-3xl">
                <FaChartBar />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Market Analysis</h4>
                <p className="text-gray-300 text-sm">
                  Semper egetuis kelly for tellus urna area condition.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image + Stats Card */}
        <div data-aos='fade-left' className="relative">
          <img
            src="/cus-01.jpg" // place this image in your public folder
            alt="Business Meeting"
            width={500}
            height={500}
            className="rounded-xl w-full h-auto object-cover"
          />

          {/* Stats Card */}
          <div className="absolute bottom-[-40px] left-[-10px] sm:left-[-30px] bg-white text-[#151875] p-6 rounded-xl shadow-lg w-[90%] sm:w-[250px]">
            <p className="text-3xl font-bold mb-1">98%</p>
            <p className="text-sm font-semibold mb-3">Business Growth</p>

            <div className="flex space-x-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month, i) => (
                <div key={month} className="flex flex-col items-center text-xs text-[#151875]">
                  <div
                    className={`w-2 rounded-t-full ${
                      i % 2 === 0 ? 'h-8 bg-yellow-400' : 'h-5 bg-[#151875]'
                    }`}
                  ></div>
                  <span className="mt-1">{month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-10 z-0 bg-no-repeat bg-contain"></div>
    </section>
  );
}