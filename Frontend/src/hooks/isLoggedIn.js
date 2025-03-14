import Cookies from "js-cookie";

const isLoggedIn = () => {
  const token = Cookies.get("token");
  // console.log("Token:", token);
  if (token) {
    return token;
  }
};

export default isLoggedIn;
