// File: components/TrustedBusinessesSection.jsx

import Image from 'next/image';

export default function Business() {
  return (
    <section className="bg-[#181ba8] text-white rounded-2xl overflow-hidden my-12 mx-4 md:mx-44 ">
      <div className="flex items-center ">
    
        <div className='flex gap-5 mx-10 items-center'>
            <div className="bg-yellow-500 w-[120px] h-[120px] p-6 text-center text-white font-bold text-3xl md:text-4xl">
          <p>40+</p>
          <p className="text-sm mt-2 text-white font-semibold">Consulting<br />firm</p>
        </div>

        
        <div className="p-8  ">
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-3">
            Trusted, Happy & Satisfied Businesses
          </h2>
          <p className="text-white text-sm md:text-base">
            When you work with HR Solutions, you get the best. We provide adaptable solutions that allow
            you to be a part of the entire process.
          </p>
        </div>
        </div>

        
        <div className="hidden md:block ">
          <img
            src="./Business-1.jpg" // Ensure this image is placed in the /public folder
            alt="Business Meeting"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
