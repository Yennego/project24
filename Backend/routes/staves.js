const express = require("express");
const router = express.Router();
const stavesController = require("../controllers/stavesController");

router.get("/", stavesController.getAllStaves);
router.get("/getStaff/:id", stavesController.getStaff);
router.post("/createStaff", stavesController.createStaff);
router.put("/updateStaff/:id", stavesController.updateStaff);
router.delete("/deleteStaff/:id", stavesController.deleteStaff);

module.exports = router;
