const express = require("express");
const router = express.Router();

let syllabus = [];

// Get all syllabuses
router.get("/", (req, res) => {
  res.json(syllabus);
});

// Add a new syllabus
router.post("/", (req, res) => {
  const { judul, materi, tugas } = req.body;
  const newSyllabus = { id: syllabus.length + 1, judul, materi, tugas };
  syllabus.push(newSyllabus);
  res.status(201).json(newSyllabus);
});

module.exports = router;
