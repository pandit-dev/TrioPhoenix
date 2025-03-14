import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/api.js";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await API.post("/auth/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success(res?.data?.message);
        navigate("/admin");
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full sm:max-w-md bg-white shadow-lg rounded-xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Trio Phoenix" className="h-12" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold border-t-2 text-gray-800 mb-6">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-1 border border-gray-300 focus:border-blue-500 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-1 border border-gray-300 focus:border-blue-500 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-semibold transition ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 cursor-pointer"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/admin/register"
              className="text-blue-600 font-medium underline"
            >
              Create One
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
