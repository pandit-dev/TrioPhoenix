import {
  FaFacebookSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
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
          <div className="flex gap-3 mt-4">
            <span className="hover:text-white hover:bg-red-500">
              <FaFacebookSquare size={25} />
            </span>
            <span className="hover:text-white hover:bg-red-500">
              <FaTwitterSquare size={25} />
            </span>
            <span className="hover:text-white hover:bg-red-500">
              <FaLinkedin size={25} />
            </span>
            <span className="hover:text-white hover:bg-red-500">
              <FaPinterestSquare size={25} />
            </span>
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
              <li key={path}>
                <a
                  href={`#${path}`}
                  className="block text-gray-600 hover:text-red-500 transition-transform duration-300 ease-in-out hover:translate-x-2"
                >
                  {label}
                </a>
              </li>
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
              <li key={service}>
                <a
                  href="#services"
                  className="block text-gray-600 hover:text-red-500 transition-transform duration-300 ease-in-out hover:translate-x-2"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-gray-900">Get In Touch</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="tel:+919609226464"
                className="text-gray-600 hover:text-red-500"
              >
                +91 (960) 9226464
              </a>
            </li>
            <li>
              <a
                href="mailto:info@triophoenix.com"
                className="text-gray-600 hover:text-red-500"
              >
                info@triophoenix.com
              </a>
            </li>

            <li className="text-gray-600">Patinan, Bagnan Howrah, WB-711303</li>
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
