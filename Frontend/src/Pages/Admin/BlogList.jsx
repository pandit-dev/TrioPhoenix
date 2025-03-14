import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import LeftSidebar from "./LeftSidebar";
import { Link } from "react-router-dom";
import BlogForm from "../../components/BlogForm";
import useBlogData from "../../hooks/useBlogData";

const BlogList = () => {
  const [search, setSearch] = useState("");
  const [blogModel, setBlogModel] = useState(false);
  const [existingBlog, setExistingBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const { blogs, loading,fetchBlogs, deleteBlog } = useBlogData();

  // **Filtering Blogs**
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  // **Pagination Logic**
  const totalPages = Math.ceil(filteredBlogs.length / entriesPerPage);
  const indexOfLastBlog = currentPage * entriesPerPage;
  const indexOfFirstBlog = indexOfLastBlog - entriesPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
      <AdminNavbar />
      <LeftSidebar />

      {/* Navbar */}
      <div className="absolute top-24 z-20 w-[78%] text-blue-900 bg-white p-4 flex items-center gap-5 ml-72 shadow-md">
        <Link to={"/admin"} className="text-xl cursor-pointer hover:border-2 py-1 px-2 rounded-md">
          &larr;
        </Link>

        <h2 className="text-xl font-semibold">Blog List</h2>
        <button
          onClick={() => {
            setBlogModel(true);
            setExistingBlog(null);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
        >
          + Create
        </button>
      </div>
      {blogModel && (
        <BlogForm
          existingBlog={existingBlog}
          onFormClose={() => setBlogModel(false)}
          fetchBlogs={fetchBlogs}
        />
      )}

      {/* Table Section */}
      <div className="pl-74 p-20 gap-6">
        <div className="flex justify-between items-center mb-4">
          {/* Show Entries Dropdown */}
          <div>
            <label className="text-sm">Show </label>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1); 
              }}
              className="border rounded px-2 py-1"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <label className="text-sm"> entries</label>
          </div>

          {/* Search Input */}
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

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center my-10">
            <span className="text-gray-600 text-lg font-semibold animate-pulse">Loading...</span>
          </div>
        ) : (
          <>
            {/* Table */}
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">#Id</th>
                  <th className="border px-4 py-2">Blog Title</th>
                  <th className="border px-4 py-2">Blog Image</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog) => (
                  <tbody key={blog._id}>
                    <tr>
                      <td className="border px-2 text-center">{blog._id}</td>
                      <td className="border px-2 text-center">{blog.title}</td>
                      <td className="border px-2 text-center">
                        <img src={blog.image} alt="blog" className="w-20 h-20 object-cover mx-auto" />
                      </td>
                      <td className="border px-2 text-center space-x-2 space-y-2">
                        <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">View</button>
                        <button
                          className="bg-green-500 text-white p-2 rounded-md cursor-pointer"
                          onClick={() => {
                            setBlogModel(true);
                            setExistingBlog(blog);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
                          onClick={() => deleteBlog(blog._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center" colSpan="4">
                      No data available in table
                    </td>
                  </tr>
                </tbody>
              )}
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
              <span>
                Showing {indexOfFirstBlog + 1} to {Math.min(indexOfLastBlog, filteredBlogs.length)} of{" "}
                {filteredBlogs.length} entries
              </span>
              <div className="flex space-x-4">
                <button
                  className={`text-pink-400 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Previous
                </button>
                <button
                  className={`text-pink-400 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BlogList;
