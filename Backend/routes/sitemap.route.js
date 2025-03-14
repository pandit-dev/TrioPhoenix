import express from "express";
import {Sitemap} from "../models/Sitemap.model.js";

const router = express.Router();

// Get all sitemap entries
router.get("/", async (req, res) => {
  try {
    const sitemaps = await Sitemap.find();
    res.json(sitemaps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new sitemap entry
router.post("/", async (req, res) => {
  try {
    const newEntry = new Sitemap(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a sitemap entry
router.delete("/:id", async (req, res) => {
  try {
    await Sitemap.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
