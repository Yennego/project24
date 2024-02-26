const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//routes
router.get("/", usersController.getAllUsers);
router.get("/getUser/:id", usersController.getUsers);
router.post("/createUser", usersController.createUser);
// router.post("/createUsersBatch", usersController.createUsersBatch);
router.put("/updateUser/:id", usersController.updateUser);
router.delete("/deleteUser/:id", usersController.deleteUser);

module.exports = router;
