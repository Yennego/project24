const express = require("express");
const router = express.Router();
const documentControllers = require("../controllers/documentsController");
const authorize = require("../middleware/authorization");

router.get("/", documentControllers.getAllDocuments);
router.get(
  "getDocument/:id",
  authorize(["admin", "staff"]),
  documentControllers.getDocument
);
router.post(
  "createDocument/",
  authorize(["admin", "staff"]),
  documentControllers.createDocument
);
router.put(
  "updateDocument/:id",
  authorize(["admin", "staff"]),
  documentControllers.updateDocument
);
router.delete(
  "deleteDocument/:id",
  authorize(["admin", "staff"]),
  documentControllers.deleteDocument
);

module.exports = router;
