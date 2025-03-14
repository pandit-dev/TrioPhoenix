import {
  FaFacebookSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  const liVariants = {
    visible: {
      scale: 1.3,
      originX: 0,
      color: "#ff0000",
      transition: { type: "spring", bounce: 0.6 },
    },
  };

  const social = {
    visible: {
      scale: 1.3,
      color: "#ff0000",
      boxShadow: "0px 0px 10px rgb(245, 18, 10)",
      transition: { type: "spring", bounce: 0.6 },
    },
  };
  return (
    <footer className="bg-blue-50 text-gray-700 py-12 md:pt-40 border-t">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">
        {/* Left Section - Logo & Description */}
        <div>
          <img src="/logo.png" alt="Trio Phoenix" className="w-32 mb-4" />
          <p className="text-gray-600">
            Triophoenix: Driving Growth, Crafting Success, Together in the
            Digital Frontier.
          </p>
          {/* Social Icons */}

          <div
            className="flex gap-3 mt-4"            
          >
            <motion.span variants={social} whileHover="visible">
              <FaFacebookSquare size={25} />
            </motion.span>
            <motion.span variants={social} whileHover="visible">
              <FaTwitterSquare size={25} />
            </motion.span>
            <motion.span variants={social} whileHover="visible">
              <FaLinkedin size={25} />
            </motion.span>
            <motion.span variants={social} whileHover="visible">
              <FaPinterestSquare size={25} />
            </motion.span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-gray-900">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {[
              { path: "home", label: "Home" },
              { path: "about", label: "About Us" },
              { path: "services", label: "Services" },
              { path: "packages", label: "Packages" },
              { path: "contact", label: "Contact Us" },
            ].map(({ path, label }) => (
              <motion.li key={path} variants={liVariants} whileHover="visible">
                <motion.a href={`#${path}`}>{label}</motion.a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-gray-900">Services</h3>
          <ul className="mt-4 space-y-3">
            {[
              "Website Development",
              "CRM Development",
              "Software",
              "Android and iOS App",
              "Complete Graphics Branding",
            ].map((service) => (
              <motion.li
                key={service}
                variants={liVariants}
                whileHover="visible"
              >
                <a href="#services">{service}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-gray-900">Get In Touch</h3>
          <ul className="mt-4 space-y-3">
            <motion.li variants={liVariants} whileHover="visible">
              <a href="tel:+919609226464">+91 (960) 9226464</a>
            </motion.li>
            <motion.li variants={liVariants} whileHover="visible">
              <a href="mailto:info@triophoenix.com">info@triophoenix.com</a>
            </motion.li>

            <motion.li variants={liVariants} whileHover="visible">
              Patinan, Bagnan Howrah, WB-711303
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t mt-10 pt-6 px-6 text-center text-gray-600 text-sm">
        Copyright © 2025 All rights reserved | This template is made with{" "}
        <span className="text-red-500">❤</span> by{" "}
        <span className="text-red-500 font-medium">Triophoenix</span>
      </div>
    </footer>
  );
};

export default Footer;
