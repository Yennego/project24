const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/db").jwtSecret;
const bcrypt = require("bcrypt");
const User = require("../models/user");

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, roles: user.roles }, jwtSecret);

    // Send token in response
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//routes
router.get("/", usersController.getAllUsers);
router.get("/getUser/:id", usersController.getUsers);
router.post("/createUser", usersController.createUser);
// router.post("/createUsersBatch", usersController.createUsersBatch);
router.put("/updateUser/:id", usersController.updateUser);
router.delete("/deleteUser/:id", usersController.deleteUser);

module.exports = router;
