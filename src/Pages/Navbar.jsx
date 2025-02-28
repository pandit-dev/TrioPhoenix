import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsMenuOpen(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header (Hidden on Mobile) */}
      <header className="hidden md:flex justify-around items-center bg-red-600 text-white text-sm py-2 px-6">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <MdLocationOn size={16} />
            <span>Patinan, Bagnan Howrah, WB-711303</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail size={16} />
            <span>info@triophoenix.com</span>
          </div>
        </div>
        <div className="flex gap-3">
          <FaLinkedin size={16} className="cursor-pointer" />
          <FaTwitter size={16} className="cursor-pointer" />
          <FaFacebook size={16} className="cursor-pointer" />
          <FaGooglePlusG size={16} className="cursor-pointer" />
        </div>
      </header>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between md:justify-around sticky top-0 z-500 px-6 py-3 shadow-md bg-white">
        {/* Logo */}
        <div className="w-32">
          <img src="/logo.png" alt="Trio Phoenix" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation Links */}
        <ul
          ref={menuRef}
          className={`fixed top-0 left-0 w-full h-auto bg-red-600 text-white md:text-black 
            flex flex-col items-center py-10 space-y-6 transform transition-all duration-300 ease-in-out 
            md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:space-y-0 md:space-x-6 md:py-0 
            ${
              isMenuOpen
                ? "translate-y-16 opacity-100 scale-100"
                : "-translate-y-full opacity-0 scale-90 md:translate-y-0 md:opacity-100 md:scale-100"
            }`}
        >
          {[
            { path: "home", label: "HOME" },
            { path: "about", label: "ABOUT" },
            { path: "services", label: "SERVICES" },
            { path: "packages", label: "PACKAGES" },
            { path: "contact", label: "CONTACT US" },
          ].map(({ path, label }) => (
            <li key={path}>
              <a
                href={`#${path}`}
                className="cursor-pointer hover:text-gray-200 md:hover:text-red-600"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button (Hidden on Mobile) */}
        <a href="#contact" className="hidden md:block">
          <button className="bg-red-600 text-white px-5 py-2 rounded-md font-medium hover:bg-red-700">
            CONTACT NOW
          </button>
        </a>
      </nav>
    </>
  );
}
