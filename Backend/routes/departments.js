const express = require("express");
const router = express.Router();
const departmentsController = require("../controllers/departmentsController");

router.get("/", departmentsController.getAllDepartments);
router.get("/getDepartment/:id", departmentsController.getDepartment);
router.post("/createDepartment", departmentsController.createDepartment);
router.put("/updateDepartment/:id", departmentsController.updateDepartment);
router.delete("/deleteDepartment/:id", departmentsController.deleteDepartment);

module.exports = router;
