import { User } from "../models/User.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generatToken.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ message: "All field required", success: false });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exist !",
        success: false,
      });
    }
    bcrypt.hash(password, 12, async function (err, hash) {
      const createdUser = await User.create({
        firstName,
        lastName,
        email,
        password: hash,
      });

      return res.status(200).json({
        message: "Account Created successfully !",
        success: true,
        user: createdUser,
      });
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to register new user." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Something is missing, please check !",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        message: "Something went wrong!",
        success: false,
      });
    }
    let token = generateToken(user);

    user = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    return res
      .cookie("token", token, { httpOnly: false, sameSite: "strict" })
      .status(200)
      .json({
        message: `Welcome ${user.firstName}`,
        success: true,
        user: user,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to login." });
  }
};

export const logout = async (_, res) => {
  try {
    return res
      .clearCookie("token", { httpOnly: false, sameSite: "strict" })
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
  }
};
