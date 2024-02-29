// routes/admins.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/getAllAdmins", adminController.getAllAdmins);
router.get("/getAdmin/:id", adminController.getAdmin);
router.post("/createAdmin", adminController.createAdmin);
router.put("/updateAdmin/:id", adminController.updateAdmin);
router.delete("/deleteAdmin/:id", adminController.deleteAdmin);

module.exports = router;
