import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const servicesLeft = [
  "Logo",
  "Logo in embroidery format (DST And EMB)",
  "Stationary items designing And MockUp",
  "Letter head",
  "Envelop",
  "Business card",
  "Identity Card",
  "Wall Paper",
  "Packages designing",
];

const servicesRight = [
  "Flyers",
  "Printable banners, hoardings",
  "Digital Banners",
  "Menu design for restaurants",
  "Tshirt designing",
  "Tshirt vectorising",
  "DTF Sheet Builder",
  "Gang sheet Building And More.....",
];

const GraphicDesignServices = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftView = useInView(leftRef);
  const isRightView = useInView(rightRef);

  const featureVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.3 }, // Delay each item
    }),
  };
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl md:text-5xl font-bold">
        Graphics Designing Services
      </h2>
      <p className="text-xl font-semibold m-16">
        For Commercial And Individual
      </p>

      <div className="max-w-5xl px-5 mx-auto mt-8 flex flex-col md:flex-row gap-6">
        <div
          ref={leftRef}
          className="bg-blue-50 border-2 border-red-500 p-6 rounded-lg shadow-md flex-1"
        >
          <ul className="text-left text-gray-700 space-y-4">
            {servicesLeft.map((service, i) => (
              <motion.li
                key={i}
                className="flex items-start text-xl font-medium"
                variants={featureVariants}
                initial="hidden"
                animate={isLeftView ? "visible" : "hidden"}
                custom={i}
              >
                <span className="mr-2">○</span> {service}
              </motion.li>
            ))}
          </ul>
        </div>

        <div
          ref={rightRef}
          className="bg-blue-50 px-5 border-2 border-red-500 p-6 rounded-lg shadow-md flex-1"
        >
          <ul className="text-left text-gray-700 space-y-4">
            {servicesRight.map((service, i) => (
              <motion.li
                key={i}
                className="flex items-start text-xl font-medium"
                variants={featureVariants}
                initial="hidden"
                animate={isRightView ? "visible" : "hidden"}
                custom={i}
              >
                <span className="mr-2">○</span> {service}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignServices;
