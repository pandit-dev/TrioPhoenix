import React from "react";
import { FaBullhorn, FaEnvelope, FaHome, FaNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className=" absolute top-0 w-64 z-20 min-h-screen bg-white p-5">
      <div className="w-32 mb-5 ">
        <img src="/logo.png" alt="Trio Phoenix" />
      </div>
      <ul className="border-t-2 ">
        <li className="mb-3 mt-6">
          <Link
            to="/admin"
            className="flex items-center p-3 hover:bg-gray-200 rounded"
          >
            <FaHome className="mr-2" /> Dashboard
          </Link>
        </li>
        <li className="mb-3">
          <Link
            to="/admin/seo"
            className="flex items-center p-3 hover:bg-gray-200 rounded"
          >
            <FaBullhorn className="mr-2" /> SEO
          </Link>
        </li>
        <li className="mb-3">
          <Link
            to="/admin/blogs"
            className="flex items-center p-3 hover:bg-gray-200 rounded"
          >
            <FaNewspaper className="mr-2" /> Blogs
          </Link>
        </li>
        <li className="mb-3">
          <Link
            to="/admin/contact"
            className="flex items-center p-3 hover:bg-gray-200 rounded"
          >
            <FaEnvelope className="mr-2" /> Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
