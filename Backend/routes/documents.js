const express = require("express");
const router = express.Router();
const documentControllers = require("../controllers/documentsController");
const authorize = require("../middleware/authorization");

router.get("/", documentControllers.getAllDocuments);
router.get(
  "/:id",
  authorize(["admin", "faculty"]),
  documentControllers.getDocument
);
router.post(
  "/",
  authorize(["admin", "faculty"]),
  documentControllers.createDocument
);
router.put(
  "/:id",
  authorize(["admin", "faculty"]),
  documentControllers.updateDocument
);
router.delete(
  "/:id",
  authorize(["admin", "faculty"]),
  documentControllers.deleteDocument
);

module.exports = router;
