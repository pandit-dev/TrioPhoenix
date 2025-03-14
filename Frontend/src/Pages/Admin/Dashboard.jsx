import React, { useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import LeftSidebar from "./LeftSidebar";
import useBlogData from "../../hooks/useBlogData";
import { Link } from "react-router-dom";
import useContactData from "../../hooks/useContactData";

const Dashboard = () => {
  const { blogCount, loading } = useBlogData();
  const { contactsCount } = useContactData();

  
  return (
    <>
    <AdminNavbar/>
    <LeftSidebar/>
  
      {/* Dashboard Cards */}
      <div className="absolute top-24 z-20  w-[78%] text-blue-900 bg-white p-4  flex justify-between items-center ml-72 shadow-md ">
      <h2 className="text-xl py-2 font-semibold">Dashboard</h2></div>
      <div className=" pl-74 p-20 grid grid-cols-3 gap-6">
        <Link to="/admin/contact" className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-lg text-white text-center">
          <div className="text-3xl">📧</div>
          <p className="mt-2">Contact Us</p>
          <p className="text-xl font-bold">{loading ? "Loading..." :contactsCount}</p>
        </Link>
        <Link to="/admin/seo" className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg text-white text-center">
          <div className="text-3xl">📧</div>
          <p className="mt-2">SEO</p>
          <p className="text-xl font-bold">0</p>
        </Link>
        <Link to="/admin/blogs" className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-lg text-white text-center">
          <div className="text-3xl">📰</div>
          <p className="mt-2">Blogs</p>
          <p className="text-xl font-bold">{loading ? "Loading..." : blogCount}</p>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
