import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import connectDB from "./utils/db.js";

import authRoutes from "./routes/auth.route.js"
import blogRoutes from "./routes/blog.route.js"
import contactRoutes from "./routes/contact.route.js"
import sitemapRoutes from "./routes/sitemap.route.js"

dotenv.config({});
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "https://triophoenix.onrender.com", credentials: true }));

app.use("/api/admin/auth", authRoutes);
app.use("/api/admin/blogs", blogRoutes);
app.use("/api/admin/contact", contactRoutes);
app.use("/api/admin/sitemap", sitemapRoutes);



app.use(express.static(path.join(__dirname, "Frontend/dist")))
app.get('*', (_,res)=>{
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
