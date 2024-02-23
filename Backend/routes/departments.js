const express = require("express");
const router = express.Router();
const departmentsController = require("../controllers/departmentsControllers");

router.get("/", departmentsController.getAllDepartments);
router.get("/:id", departmentsController.getDepartment);
router.post("/", departmentsController.createDepartment);
router.put("/:id", departmentsController.updateDepartment);
router.delete("/:id", departmentsController.deleteDepartment);

module.exports = router;
