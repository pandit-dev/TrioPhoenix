import React, { useState, useEffect } from "react";
import About from "./About";
import WhatWeDo from "./WhatWeDo";
import Packages from "./Packages";
import Services from "./Services";
import GraphicDesignServices from "./GraphicDesignServices";
import Testimonials from "./Testimonials";
import News from "./News";
import ContactUs from "./ContactUs";
import { motion } from "motion/react";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prev) => !prev);
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="home"
        className="relative bg-cover bg-center h-screen 
        bg-[url('https://plus.unsplash.com/premium_photo-1661607412792-685013311b78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJ1c2luZXNzJTIwd2l0aCUyMGJlYXV0aWZ1bGwlMjBnaXJsfGVufDB8MXwwfHx8MA%3D%3D')] 
        md:bg-[url('/h1_hero.webp')] 
        flex items-center"
      >
        <div className="z-10 w-full px-4 md:px-16 lg:px-32 flex md:mt-0 mt-36 md:items-center h-full">
          <div className="w-full md:w-2/3 lg:w-1/2 md:text-left relative">
            <motion.p
              className="text-red-500 text-sm md:text-base uppercase"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Welcome to Triophoenix
            </motion.p>

            <motion.h1
              key={toggle ? "h1-1" : "h1-2"}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-800 mt-2 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              {toggle ? (
                <>
                  Empowering Growth <br /> Your Business, <br /> Our Expertise
                </>
              ) : (
                <>
                  Unlock SEO Success <br /> Elevate Your <br /> Online
                  Visibility
                </>
              )}
            </motion.h1>

            <a
              href="#contact"
              className="mt-6 inline-block bg-red-500 text-white px-6 py-3 rounded-md 
              hover:bg-red-600 hover:scale-105 transition-all duration-300 
              shadow-md hover:shadow-lg"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>

      <About />
      <WhatWeDo />
      <Packages />
      <Services />
      <GraphicDesignServices />
      <Testimonials />
      <News />
      <ContactUs />
    </>
  );
};

export default Home;
