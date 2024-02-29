// routes/students.js
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentsController");

router.get("/getAllStudents", studentController.getAllStudents);
router.get("/getStudent/:id", studentController.getStudent);
router.post("/createStudent", studentController.createStudent);
router.put("/updateStudent/:id", studentController.updateStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);

module.exports = router;
