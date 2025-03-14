import mongoose from "mongoose";

const sitemapSchema = new mongoose.Schema({
  pageUrl: { type: String, required: true, unique: true },
  metaTitle: { type: String },
  metaKeywords: { type: String },
  metaDescription: { type: String },
  canonical: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Sitemap = mongoose.model("Sitemap", sitemapSchema);
