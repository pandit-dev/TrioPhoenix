import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const packages = [
  {
    title: "Basic Package",
    price: "$100/mo",
    features: [
      "Google My Business Optimization",
      "Google My Business 2 Post Per Week",
      "On Page SEO (Only)",
      "Basic Website Maintenance (For SEO Only)",
    ],
  },
  {
    title: "Advance Package",
    price: "$299/mo",
    features: [
      "Google My Business Optimization",
      "Google My Business 5 Post Per Week",
      "On Page SEO + Off Page Optimization",
      "Basic Website Maintenance (For SEO Only)",
      "3 Social Media Posts Per Week",
      "3 Backlinks Per Week (Free Backlinks)",
      "Guaranteed Rank in 3 Keywords",
    ],
  },
  {
    title: "Exclusive Package",
    price: "$499/mo",
    features: [
      "Google My Business Optimization",
      "Google My Business 5 Post Per Week",
      "On Page SEO + Off Page Optimization",
      "Full Website Maintenance + Content and Page Changes",
      "5 Social Media Posts Per Week",
      "3 Backlinks Per Week (Free Backlinks)",
      "5 Paid Backlinks Per Month",
      "Social Media Marketing (Organic)",
      "Guaranteed Rank in 5 Keywords",
    ],
  },
];

const Packages = () => {
  const ref = useRef(null);
  const sub6Ref = useRef(null);
  const sub12Ref = useRef(null);

  const isInView = useInView(ref);
  const is6SubView = useInView(sub6Ref);
  const is12SubView = useInView(sub12Ref);

  const featureVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.3 },
    }),
  };
  return (
    <section id="packages" className="py-16 text-center bg-gray-100">
      <h2 className="md:text-5xl text-3xl font-bold text-gray-900 mb-16">
        Digital Marketing Packages
      </h2>

      {/* Packages Section */}
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold ">{pkg.title}</h3>
            <p className="text-2xl font-bold text-red-500 mt-2">{pkg.price}</p>
            <ul className="mt-8 space-y-6 text-gray-600">
              {pkg.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="text-md"
                  variants={featureVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i} // Pass index for staggered delay
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Subscription Offers */}
      <div className="mt-12 bg-sky-500 text-white py-12 md:px-20 px-10 rounded-lg shadow-lg max-w-5xl mx-auto relative">
        <h3 className="text-3xl md:text-5xl font-bold">
          For All Marketing Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            ref={sub6Ref}
            className="border-4 border-white py-28 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={is6SubView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", bounce: 0.6, duration: 4 }}
          >
            <p className="text-2xl font-bold">6 Months Subscription</p>
            <p className="text-2xl mt-4">
              Pay only for 5 months <br /> and get 1 month free.
            </p>
          </motion.div>

          <motion.div
            ref={sub12Ref}
            className="border-4 border-white py-28 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={is12SubView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", bounce: 0.6, duration: 4 }}
          >
            <p className="text-2xl font-bold">12 Months Subscription</p>
            <p className="text-2xl mt-4">
              Pay only for 10 months <br /> and get 2 months free.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
