import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    name: "ADAM",
    role: "Client",
    image: "/testimonials.webp",
    feedback:
      "Triophoenix transformed our digital presence! Their expert strategies drove significant traffic to our site, resulting in a substantial boost in sales. Highly recommended for any business looking to thrive online.",
  },
  {
    id: 2,
    name: "RYAN",
    role: "Client",
    image: "/testimonials.webp",
    feedback:
      "Working with Triophonix was a game-changer for us. Their tailored digital marketing solutions not only increased our brand visibility but also enhanced our engagements with customers. Trustworthy, professional, and results-driven!",
  },
  {
    id: 3,
    name: "JAMES",
    role: "Client",
    image: "/testimonials.webp",
    feedback:
      "Professional and reliable. Their expertise in digital marketing helped our business grow exponentially. Would definitely work with them again!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        Testimonials
      </h2>

      <div className="max-w-3xl mx-auto mt-10">
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2  p-3 rounded-full  hover:bg-red-600 hover:text-white cursor-pointer"
          >
            <IoIosArrowBack size={24} />
          </button>

          {/* Testimonial Content */}
          <div className="flex flex-col items-center px-6">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full "
            />
            <p className="mt-4 text-gray-700 px-12 text-sm md:text-xl font-semibold">
              {testimonials[currentIndex].feedback}
            </p>

            {/* Star Ratings */}
            <div className="flex mt-3 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Name & Role */}
            <p className="mt-3 font-bold text-gray-900">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray-500 text-sm">
              {testimonials[currentIndex].role}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2  p-3 rounded-full  hover:bg-red-600 hover:text-white cursor-pointer"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
