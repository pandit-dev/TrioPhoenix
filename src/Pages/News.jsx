import React from "react";
import { motion } from "motion/react";

const newsData = [
  {
    id: 1,
    title: "Enhance Your Brand with Professional Graphic Design Services",
    date: "2024-06-22",
    image: "/GDS.webp",
  },
  {
    id: 2,
    title: "A Comprehensive SEO Guide: From Keyword Research to Technical SEO",
    date: "2024-06-19",
    image: "/SEO.webp",
  },
  {
    id: 3,
    title: "Why Video Marketing Services are Essential for Modern Businesses",
    date: "2024-06-14",
    image: "VMS.webp",
  },
];

const News = () => {
  return (
    <section className="py-28 text-center">
      <h2 className="text-3xl md:text-5xl font-bold ">Our Recent News</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-md rounded-lg overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {news.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{news.date}</p>
            </div>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 15px rgb(245, 18, 10)",
          boxShadow: "0px 0px 10px rgb(245, 18, 10)",
        }}
        className="mt-12 px-6 py-2 border border-red-500 text-red-500 font-semibold rounded-md"
      >
        See More
      </motion.button>
    </section>
  );
};

export default News;
