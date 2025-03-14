import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Facebook Ads Card */}
        <div className="bg-white  rounded-lg shadow-lg">
          <img src="/team_1.webp" alt="Facebook Ads" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 ">
              For Facebook Ads: 10% of Ads Budget.
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {[
                "Daily Campaign Maintenance",
                "Graphics For Ads",
                "Content for ads",
                "Budget Optimization as per need",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline
                    className="text-red-500"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Ads Card */}
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="/team_2.webp"
            alt="Google Ads"
            className="w-full rounded-md"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">
              For Google Ads: 20% of Ads Budget.
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {[
                "Complete Ad and campaign Maintenance and optimization",
                "Graphics For Ads",
                "Content for ads",
                "Budget Optimization as per need",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline
                    className="text-red-500"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          ref={ref}
          className="bg-white p-6 border-2 border-red-500 rounded-lg shadow-lg flex flex-col"
          whileHover={{scale:1.02, boxShadow:"0px 0px 20px rgb(209, 105, 105)"}}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-900 border-b-4 border-red-500 pb-2"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", bounce: 0.6, duration: 3 }}
          >
            What we do for you
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-800"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 3 }}
          >
            At Triophoenix, we're your digital growth partners, crafting
            tailored strategies to amplify your online presence and drive
            tangible results. From optimizing your website for maximum
            visibility to managing compelling social media campaigns, we're
            dedicated to enhancing your brand's digital footprint.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
