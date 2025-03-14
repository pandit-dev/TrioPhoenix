import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api.js";
import { X, Trash2 } from "lucide-react";

const BlogForm = ({ existingBlog, onFormClose, fetchBlogs, }) => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title || "");
      setContent(existingBlog.content || "");
      setImagePreview(existingBlog.image || null);
    } 
  }, [existingBlog]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const blogData = new FormData();
    blogData.append("title", title);
    blogData.append("content", content);

    if (imageFile) {
      blogData.append("image", imageFile);
    }
    
    try {
      let response;
      if (existingBlog?._id) {
        response = await API.patch(`/blogs/${existingBlog._id}`, blogData);
        toast.success(response?.data?.message);
      } else {
        response = await API.post("/blogs/create", blogData);
        toast.success(response?.data?.message);
      }
      await fetchBlogs();
      onFormClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-6xl mx-4 relative overflow-hidden">
        {/* Scrollable Content */}
        <div className="max-h-[90vh] overflow-y-auto p-6">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            onClick={onFormClose}
          >
            <X size={24} />
          </button>

          {/* Form Heading */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            {existingBlog ? "Edit Blog" : "Add Blog"}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 outline-none border border-gray-300 rounded-md focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
                placeholder="Enter blog title"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full outline-none border border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 focus:ring-blue-500 cursor-pointer"
              />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="rounded-md shadow-md"
                />
                <button
                  onClick={removeImage}
                  type="button"
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            )}

            {/* Content Input */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 outline-none border border-gray-300 rounded-md focus:border-blue-500 focus:ring-0 focus:ring-blue-500 h-40 "
                placeholder="Write your blog content here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-1/3 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 transition ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : existingBlog ? "Update Blog" : "Add Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
