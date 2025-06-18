// File: components/HeroBanner.jsx

import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';

export default function HeroBanner1() {
  return (
    <section className="relative  flex items-center justify-center bg-cover bg-center text-white mt-10 h-screen bg-hero1">
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      <div className="relative z-10 text-center px-6 md:px-20">
        <h1 data-aos='fade-right' className="text-3xl md:text-5xl font-bold leading-snug">
          Offering The Best Experience Of <br />
          Business Consulting Services
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          {/* Request Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2">
            REQUEST A FREE CALL →
          </button>

          {/* Phone Info */}
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-3 rounded-full text-blue-900">
              <FaPhoneAlt />
            </div>
            <div className="text-left">
              <p className="text-xs">Toll Free Call</p>
              <p className="text-lg font-bold text-white">+88 (9600) 6002</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
