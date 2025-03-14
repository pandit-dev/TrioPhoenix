import React, { useState } from "react";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "motion/react";
import API from "../../services/api";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post("/contact/", formData);
      if (response) {
        toast.success(response.data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-blue-50 text-center px-4">
      <h2 className="text-3xl md:text-5xl font-bold">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 max-w-6xl mx-auto">
        {/* Left Side - Contact Info & Map */}
        <div className="px-6 py-10 bg-white rounded-md shadow-md border-t-4 border-red-600">
          <div className="text-left space-y-6">
            <div className="flex items-center gap-4">
              <span className="rounded-full p-2 text-center hover:bg-red-500 hover:text-white">
                <MdLocationOn size={20} />
              </span>
              <div>
                <p className="text-lg font-semibold">Location :</p>
                <p>Patinan, Bagnan Howrah, WB-711303</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full p-2 text-center hover:bg-red-500 hover:text-white">
                <MdEmail size={20} />
              </span>
              <div>
                <p className="text-lg font-semibold">Email :</p>
                <p>info@triophoenix.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full p-2 text-center hover:bg-red-500 hover:text-white">
                <MdCall size={20} />
              </span>
              <div>
                <p className="text-lg font-semibold">Call :</p>
                <p>
                  +91(960) 922-6464 (India) <br /> +1(260) 520-9279 (US)
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <iframe
              title="Google Map"
              className="w-full h-48 sm:h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28166.123305869563!2d87.97107876087644!3d22.456627937857803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f81b4b4c93a6f5%3A0x20d1f1169d1e1c02!2sPatinan%2C%20West%20Bengal%20711303!5e0!3m2!1sen!2sin!4v1649323498482!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-6 bg-white rounded-md shadow-md border-t-4 border-red-600">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-left space-y-2">
                <p>Your Name</p>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 outline-none border-gray-200 focus:border-red-500 p-2 rounded-md"
                />
              </div>
              <div className="text-left space-y-2">
                <p>Your Email</p>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 outline-none border-gray-200 focus:border-red-500 p-2 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-left space-y-2">
                <p>Your Mobile Number</p>
                <input
                  required
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 outline-none border-gray-200 focus:border-red-500 p-2 rounded-md"
                />
              </div>
              <div className="text-left space-y-2">
                <p>Your Service</p>
                <input
                  required
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border-2 outline-none border-gray-200 focus:border-red-500 p-2 rounded-md"
                />
              </div>
            </div>

            <div className="text-left space-y-2">
              <p>Subject</p>
              <input
                required
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-2 outline-none border-gray-200 focus:border-red-500 p-2 rounded-md"
              />
            </div>

            <div className="text-left space-y-2">
              <p>Message</p>
              <textarea
                required
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 outline-none border-gray-200 focus:border-red-500 p-2 rounded-md resize-none"
              ></textarea>
            </div>

            {/* reCAPTCHA Placeholder */}
            {/* <div className="flex justify-center">
              <div className="bg-gray-200 p-4 rounded-md text-gray-600">
                <input type="checkbox" className="mr-2" /> I'm not a robot
                (reCAPTCHA)
              </div>
            </div> */}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={
                !loading && {
                  scale: 1.1,
                  textShadow: "0px 0px 10px rgb(245, 18, 10)",
                  boxShadow: "0px 0px 10px rgb(245, 18, 10)",
                }
              }
              className={`mt-4 px-6 py-2 border border-red-500 text-red-500 font-semibold rounded-xl ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
