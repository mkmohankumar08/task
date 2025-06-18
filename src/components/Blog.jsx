import React from "react";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const Blog = () => {
  const blogs = [
    {
      title: "Marketing your business during a downturn",
      author: "Doman Smith",
      date: "Oct 21, 2024",
      image: "./Project-01.jpg",
      avatar: "./insta1.jpg",
    },
    {
      title: "Effective content strategies for 2025",
      author: "Doman Smith",
      date: "Oct 21, 2024",
      image: "./Customer01.jpg",
      avatar: "./insta1.jpg",
    },
    {
      title: "How branding builds customer trust",
      author: "Doman Smith",
      date: "Oct 21, 2024",
      image: "./Project-03.jpg",
      avatar: "./insta1.jpg",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-12 bg-white">
      <div className="flex flex-col justify-center items-center text-blue-950 space-y-10 max-w-7xl mx-auto">
        <p className="font-bold text-orange-400 text-sm md:text-base">
          OUR BLOG UPDATE
        </p>
        <h1
          data-aos="fade-right"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-2xl"
        >
          Featured News And Insights
        </h1>

        {/* Cards */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-300 font-medium bg-white overflow-hidden shadow-sm transition-transform hover:scale-[1.02]"
            >
              <img
                src={blog.image}
                className="w-full h-[220px] object-cover rounded-2xl mt-4 px-4"
                alt=""
              />

              <div className="px-5 py-6 space-y-4">
                <p className="text-lg font-semibold">{blog.title}</p>

                <div className="flex items-center gap-2">
                  <img
                    src={blog.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt=""
                  />
                  <p className="text-orange-400 text-sm">
                    <span className="text-gray-400">By</span> {blog.author}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <button className="rounded-lg bg-gray-200 px-4 py-2 text-blue-950 flex items-center gap-2 text-sm">
                    READ MORE <FaArrowRight />
                  </button>
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendarAlt /> {blog.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
