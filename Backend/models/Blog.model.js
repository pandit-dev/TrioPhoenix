import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    image: { data: Buffer, contentType: String,  },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
export const Blog = mongoose.model("Blog", blogSchema);
