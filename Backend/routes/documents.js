const express = require("express");
const multer = require("multer");
const router = express.Router();
const documentControllers = require("../controllers/documentsController");
const { authorize } = require("../middleware/authorization");
const passport = require("passport");

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

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Route to upload PDF file
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("filePath"),
  documentControllers.uploadDocument
);

// Use authorization middleware for role-based access control
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  authorize("admin", "user"),
  documentControllers.getAllDocuments
);
router.get(
  "/getDocument/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin", "user"),
  documentControllers.getDocument
);
// router.post(
//   "/create",
//   passport.authenticate("jwt", { session: false }),
//   authorize(["admin"]),
//   documentControllers.createDocument
// );
router.put(
  "/updateDocument/:id",
  passport.authenticate("jwt", { session: false }),
  authorize(["admin"]),
  documentControllers.updateDocument
);
router.delete(
  "/deleteDocument/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  documentControllers.deleteDocument
);

//route to uploade PDF file
// router.post("/uploads", upload.single("pdfFile"), (req, res, next) => {
//   try {
//     documentControllers.upload(req, res);
//   } catch (error) {
//     next(error); // Pass error to the error handler middleware
//   }
// });

// // Error handler middleware for Multer upload errors
// router.use((err, req, res, next) => {
//   console.error(err);
//   if (err instanceof multer.MulterError) {
//     res.status(400).json({ message: "File upload error", error: err.message });
//   } else {
//     next(err); // Pass other errors to the global error handler middleware
//   }
// });

// router.get("/", documentControllers.getAllDocuments);
// router.get(
//   "/getDocument/:id",
//   authorize(["admin", "user"]),
//   documentControllers.getDocument
// );
// router.post(
//   "/createDocument/",
//   authorize(["admin"]),
//   documentControllers.createDocument
// );
// router.put(
//   "/updateDocument/:id",
//   authorize(["admin"]),
//   documentControllers.updateDocument
// );
// router.delete(
//   "/deleteDocument/:id",
//   authorize(["admin"]),
//   documentControllers.deleteDocument
// );

module.exports = router;
