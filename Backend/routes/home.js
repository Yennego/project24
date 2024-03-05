// routes/home.js
const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentsController");

// Home route to display documents
router.get("/", documentController.getAllDocuments);

module.exports = router;
