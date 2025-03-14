import React from "react";

import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/User/Home.jsx";
import Blog from "./Pages/User/Blog.jsx";
import Login from "./Pages/Admin/Login.jsx";
import Register from "./Pages/Admin/Register.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import SEOList from "./Pages/Admin/SEOList.jsx";
import BlogList from "./Pages/Admin/BlogList.jsx";
import ContactList from "./Pages/Admin/ContactList.jsx";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/seo"
            element={
              <AdminRoute>
                <SEOList />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <AdminRoute>
                <BlogList />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/contact"
            element={
              <AdminRoute>
                <ContactList />
              </AdminRoute>
            }
          />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
