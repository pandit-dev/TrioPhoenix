import React from "react";
import News from "./News";
import { motion } from "motion/react";

const Blog = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: "url('/blog_hero.jpg')" }}
      >
        <h1 className="flex flex-col justify-center items-center text-center  text-5xl text-white font-extrabold py-20">
          Our Blog
        </h1>
      </div>
      <motion.a
              href="/home"
              className="mt-10 mx-10 inline-block bg-red-500 text-white px-6 py-3 rounded-md shadow-md sticky top-10 z-500 "
              whileHover={{scale:1.1, boxShadow:"0px 0px 15px rgb(252, 5, 5)"}}
            >
              &larr; Home
            </motion.a>
      <News />
    </>
  );
};

export default Blog;
