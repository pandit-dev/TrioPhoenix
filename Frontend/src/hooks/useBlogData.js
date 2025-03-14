import { useState, useEffect } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const useBlogData = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await API.get("/blogs/");
      if (response) {
        //   console.log(response)
        setBlogs(response?.data?.blogs || []);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred on fetchBlogs.");
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const confirm = window.confirm("Are you sure to delete the blog?");
      if (confirm) {
        const response = await API.delete(`/blogs/${id}`);
        console.log(response)
        toast.success(response?.data?.message);
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error(error?.response?.data?.message || "Failed to delete blog");
    }
  };
  return { blogs, loading, fetchBlogs, deleteBlog, blogCount: blogs.length,};

};

export default useBlogData;

