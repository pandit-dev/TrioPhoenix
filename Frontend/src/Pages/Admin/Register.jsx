import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import API from "../../services/api";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await API.post("/auth/register", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/admin/login");
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Register Failed");
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
        <h1 className="text-3xl font-bold border-t-2 text-gray-800 mb-3">
          Register
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* First Name */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-1 border border-gray-300 focus:border-blue-500 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-1 border border-gray-300 focus:border-blue-500 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-1 border border-gray-300 focus:border-blue-500 rounded-md outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
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
          <p className="text-red-600 text-sm">
            keep email and password for further login
          </p>

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
            {loading ? "Loading..." : "Register"}
          </button>

          {/* Login Link */}
          <div className="text-center">
            Already have an account?{" "}
            <Link
              to="/admin/login"
              className="text-blue-600 font-medium underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
