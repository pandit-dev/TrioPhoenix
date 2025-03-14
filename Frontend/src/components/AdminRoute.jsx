import { Navigate } from "react-router-dom";
import isLoggedIn from "../hooks/isLoggedIn.js";

const AdminRoute = ({ children }) => {
  const admin = isLoggedIn();
  if (!admin) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};

export default AdminRoute;
