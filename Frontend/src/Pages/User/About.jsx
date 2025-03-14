import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="about" className="md:py-20 pt-10 bg-white">
      <div className="relative max-w-4xl md:mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <img
          src="/wetrusted.webp"
          alt="Team discussion"
          className="rounded-sm shadow-lg"
        />

        {/* Right Side: Content */}
        <motion.div
          ref={ref}
          className="md:absolute flex flex-col md:ml-[58%] md:mt-[30%] md:w-1/2 bg-white md:opacity-70 pt-10 pb-16 px-10 mb-4"
          whileHover={{scale:1.1, boxShadow:"0px 0px 15px rgb(252, 5, 5)"}}
        >
          <motion.h2
            className="md:text-4xl text-3xl font-bold text-center"
            initial={{ opacity: 0, y: -100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", bounce: 0.6, duration: 3 }}
          >
            Triophoenix Digital Success Empowered
          </motion.h2>
          <motion.p
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          >
            At Triophoenix, we're a dynamic digital marketing agency committed
            to revolutionizing online success. Passionate about innovation, our
            dedicated team navigates the ever-evolving digital landscape,
            propelling your brand to new heights with tailored strategies and
            creative brilliance.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
