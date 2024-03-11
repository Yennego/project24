const express = require("express");
const multer = require("multer");
const router = express.Router();
const documentControllers = require("../controllers/documentsController");
const authorize = require("../middleware/authorization");

//multer config for handling file uploads
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
    cb(null, true); //accept only PDF files
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

//route to uploade PDF file
router.post("/upload", upload.single("pdfFile"), documentControllers.upload);

router.get("/", documentControllers.getAllDocuments);
router.get("/getDocument/:id", authorize(), documentControllers.getDocument);
router.post(
  "/createDocument/",
  authorize(),
  documentControllers.createDocument
);
router.put(
  "/updateDocument/:id",
  authorize(),
  documentControllers.updateDocument
);
router.delete(
  "/deleteDocument/:id",
  authorize(),
  documentControllers.deleteDocument
);

module.exports = router;
