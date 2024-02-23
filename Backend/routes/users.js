const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//routes
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUsers);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
