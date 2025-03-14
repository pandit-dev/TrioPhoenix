import { X } from "lucide-react";
import React, { useRef } from "react";

const SEOModel = ({ onClose }) => {
  const modelRef = useRef(null);

  // Close modal when clicking outside
  const handleClose = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modelRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      {/* Modal Box */}
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-3xl mx-4 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Create New SEO Entry
        </h3>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-600 text-sm mb-1">Page URL<span className="text-red-600 ">*</span></label>
            <input
              type="text"
              placeholder="Enter Page URL"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 text-sm mb-1">Meta Title</label>
            <input
              type="text"
              placeholder="Enter Meta Title"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600 text-sm mb-1">Meta Keywords</label>
            <input
              type="text"
              placeholder="Enter Meta Keywords"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600 text-sm mb-1">Meta Description</label>
            <input
              type="text"
              placeholder="Enter Meta Description"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600 text-sm mb-1">Canonical</label>
            <input
              type="text"
              placeholder="Enter Meta Title"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
          <button type="submit"
            className="w-1/3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Create
          </button></div>
        </form>
      </div>
    </div>
  );
};

export default SEOModel;
