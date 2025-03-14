import React from "react";
import { TiThMenu } from "react-icons/ti";
import { FaRegCircleUser } from "react-icons/fa6";

const AdminNavbar = () => {
  return (
    <div className="relative  w-full bg-blue-900 text-white p-4 pb-20 flex justify-between items-center pl-72 ">
      <div ><TiThMenu size={20} className="cursor-pointer" /></div>
      <div className="flex items-center space-x-4">
        <FaRegCircleUser size={20} />
        <span className="text-sm">Admin</span>
      </div>
    </div>
  );
};

export default AdminNavbar;
