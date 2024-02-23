const express = require("express");
const router = express.Router();
const facultiesController = require("../controllers/facultiesController");

router.get("/", facultiesController.getAllFaculties);
router.get("/:id", facultiesController.getFaculty);
router.post("/", facultiesController.createFaculty);
router.put("/:id", facultiesController.updateFaculty);
router.delete("/:id", facultiesController.deleteFaculty);

module.exports = router;
