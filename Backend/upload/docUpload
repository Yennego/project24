const express = require("express");
const multer = require("multer");
const Document = require("../models/document");

const router = express.Router();

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save uploaded files to the "uploads" directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype === "application/pdf") {
    cb(null, true); // Accept only PDF files
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Route for uploading a PDF document
router.post("/upload", upload.single("pdfFile"), async (req, res) => {
  try {
    // Create a new document record in the database
    const document = new Document({
      title: req.body.title,
      abstract: req.body.abstract,
      user: req.body.userId,
      filePath: req.file.path, // Store the file path in the database
    });
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
