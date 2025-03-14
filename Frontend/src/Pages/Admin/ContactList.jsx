import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import LeftSidebar from "./LeftSidebar";
import { Link } from "react-router-dom";
import useContactData from "../../hooks/useContactData";

const ContactList = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const { contacts, loading } = useContactData();

  // **Filter contacts based on search input**
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name?.toLowerCase().includes(search.toLowerCase()) ||
      contact.email?.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone?.includes(search)
  );

  // **Pagination logic**
  const totalPages = filteredContacts?.length
    ? Math.ceil(filteredContacts.length / entriesPerPage)
    : 1;
  const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentContacts = filteredContacts?.length
    ? filteredContacts.slice(indexOfFirst, indexOfLast)
    : [];

  return (
    <>
      <AdminNavbar />
      <LeftSidebar />

      {/* Navbar */}
      <div className="absolute top-24 z-20 w-[78%] text-blue-900 bg-white p-4 flex items-center gap-5 ml-72 shadow-md">
        <Link
          to={"/admin"}
          className="text-xl cursor-pointer hover:border-2 py-1 px-2 rounded-md"
        >
          &larr;
        </Link>
        <h2 className="text-xl p-2 font-semibold">Contact List</h2>
      </div>

      {/* Table Section */}
      <div className="pl-74 p-20 gap-6">
        {/* Table Controls */}
        <div className="flex justify-between items-center mb-4">
          {/* Entries per page selector */}
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
              placeholder="Search by name, email, or phone..."
            />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center my-10">
            <span className="text-gray-600 text-lg font-semibold animate-pulse">
              Loading...
            </span>
          </div>
        ) : (
          <>
            {/* Table */}
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">#Id</th>
                  <th className="border px-4 py-2">Name</th>
                  {/* <th className="border px-4 py-2">IP</th> */}
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Phone</th>
                  <th className="border px-4 py-2">Subject</th>
                  <th className="border px-4 py-2">Message</th>
                  <th className="border px-4 py-2">Created Date</th>
                </tr>
              </thead>
              <tbody>
                {currentContacts.length > 0 ? (
                  currentContacts.map((contact, index) => (
                    <tr key={contact._id}>
                      <td className="border px-4 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border px-4 py-2">{contact.name}</td>
                      {/* <td className="border px-4 py-2">{contact.ip || "N/A"}</td> */}
                      <td className="border px-4 py-2">{contact.email}</td>
                      <td className="border px-4 py-2">{contact.phone}</td>
                      <td className="border px-4 py-2">{contact.subject}</td>
                      <td className="border px-4 py-2">{contact.message}</td>
                      <td className="border px-4 py-2">
                        {new Date(contact.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="border px-4 py-2 text-center" colSpan="8">
                      No data available in table
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
              <span>
                Showing {indexOfFirst + 1} to{" "}
                {Math.min(indexOfLast, filteredContacts.length)} of{" "}
                {filteredContacts.length} entries
              </span>
              <div className="flex space-x-4">
                <button
                  className={`text-pink-400 ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Previous
                </button>
                <button
                  className={`text-pink-400 ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
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

export default ContactList;
