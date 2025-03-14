import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign({ userId: user._id, role:user.role }, process.env.SECRET_KEY);
};
export default generateToken;
