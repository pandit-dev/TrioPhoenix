import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getOneBlog,
  updateBlog,
} from "../controllers/blogController.js";
import upload from "../utils/multer.js";
// import isLoggedIn from "../middlewares/isLoggedIn.js";
// import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

router.post("/create",upload.single("image"), createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getOneBlog);
router.patch("/:id",upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

export default router;
