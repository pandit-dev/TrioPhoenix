import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import LeftSidebar from "./LeftSidebar";
import { Link } from "react-router-dom";
import SEOModel from "../../components/SEOModel";

const SEOList = () => {
  const [search, setSearch] = useState("");
  const [showModel, setShowModel] = useState(false);

  // Close popover when clicking outside
  // const handleOutsideClick = (e) => {
  //   if (!e.target.closest("#popover") && !e.target.closest("#create-btn")) {
  //     setIsPopoverOpen(false);
  //   }
  // };

  return (
    <>
      <AdminNavbar />
      <LeftSidebar />

      {/* Click outside to close popover */}
      {/* <div onClick={handleOutsideClick} > */}
        {/* Navbar */}
        <div className="absolute top-24 z-20 w-[78%] text-blue-900 bg-white p-4 flex items-center gap-5 ml-72 shadow-md"
         >
          <Link to={"/admin"} className="text-xl cursor-pointer hover:border-2 py-1 px-2 rounded-md">
            &larr;
          </Link>
          <h2 className="text-xl font-semibold">SEO List</h2>

          {/* Create Button */}
          <button
            id="create-btn"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={()=>setShowModel(true)}
          >
            + Create
          </button>

          </div>

          {showModel && (
           <SEOModel onClose={()=>setShowModel(false)}/>
          )}

        {/* Table Section */}
        <div className="pl-74 p-20 gap-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <label className="text-sm">Show </label>
              <select className="border rounded px-2 py-1">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <label className="text-sm"> entries</label>
            </div>
            <div>
              <label className="text-sm">Search: </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
          </div>

          {/* Table */}
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">#Id</th>
                <th className="border px-4 py-2">Page URL</th>
                <th className="border px-4 py-2">Created</th>
                <th className="border px-4 py-2">Modified</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center" colSpan="5">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
            <span>Showing 0 to 0 of 0 entries</span>
            <div className="flex space-x-4">
              <button className="text-pink-400" disabled>
                Previous
              </button>
              <button className="text-pink-400" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default SEOList;
