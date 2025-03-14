import { Blog } from "../models/Blog.model.js";
import sharp from "sharp";
export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    // const { image } = req.file;

    if (!req.file || !title || !content) {
      return res.status(400).json({
        success: false,
        message: "Image, Title, and Content are required.",
      });
    }

    const compressedImage = await sharp(req.file.buffer)
      .resize(800, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 70 })
      .toBuffer();

    const blog = await Blog.create({
      image: {
        data: compressedImage,
        contentType: "image/jpeg",
      },
      title,
      content,
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully.",
      blog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create new blog." });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    let blog = await Blog.findById(id);

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found." });
    }


    if (req.file) {
      const compressedImage = await sharp(req.file.buffer).resize(800, 600).toFormat("jpeg").jpeg({quality:70}).toBuffer();

      blog.image.data = compressedImage;
      blog.image.contentType = "image/jpeg";
    }

    if (title) blog.title = title;
    if (content) blog.content = content;

    await blog.save();

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully.",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to update blog." });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    const formattedBlogs = blogs.map((blog) => ({
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      image: blog.image?.data
        ? `data:${blog.image.contentType};base64,${blog.image.data.toString(
            "base64"
          )}`
        : null,
      createdAt: blog.createdAt,
    }));

    return res.status(200).json({ blogs: formattedBlogs, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get all blogs." });
  }
};

export const getOneBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    return res.status(200).json({
      success: true,
      blog: {
        _id: blog._id,
        title: blog.title,
        content: blog.content,
        image: `data:${
          blog.image.contentType
        }; base64, ${blog.image.data.toString("base64")}`,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get blog." });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found." });
    }

    return res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete blog." });
  }
};
