// File: components/StatsSection.jsx

import { FaTrophy, FaSmile, FaClock } from 'react-icons/fa';
import { MdPublic } from 'react-icons/md';

export default function StatsSection() {
  return (
    <section className="bg-orange-50 py-16 px-4 sm:px-10 md:px-20">
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center max-w-7xl mx-auto"
      >
        {/* Card 1 */}
        <div className="flex items-center gap-4 text-left">
          <FaTrophy className="text-yellow-500 text-5xl sm:text-6xl" />
          <div>
            <h3 className="text-2xl sm:text-3xl text-blue-900 font-bold">45+</h3>
            <p className="text-blue-950 text-sm sm:text-base font-medium">
              Successfully Completed Projects
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 text-left">
          <FaSmile className="text-yellow-500 text-5xl sm:text-6xl" />
          <div>
            <h3 className="text-2xl sm:text-3xl text-blue-900 font-bold">92K</h3>
            <p className="text-blue-950 text-sm sm:text-base font-medium">
              Satisfied 100% Our Clients
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4 text-left">
          <MdPublic className="text-yellow-500 text-5xl sm:text-6xl" />
          <div>
            <h3 className="text-2xl sm:text-3xl text-blue-900 font-bold">19+</h3>
            <p className="text-blue-950 text-sm sm:text-base font-medium">
              All Over The World We Are Available
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center gap-4 text-left">
          <FaClock className="text-yellow-500 text-5xl sm:text-6xl" />
          <div>
            <h3 className="text-2xl sm:text-3xl text-blue-900 font-bold">25+</h3>
            <p className="text-blue-950 text-sm sm:text-base font-medium">
              Years of Experiences To Run This Company
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
