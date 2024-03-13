const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorization");

// Protected route that requires authentication and specific roles
router.get("/protected", authorize(["admin", "user"]), (req, res) => {
  try {
    const data = [];

    console.log("Request successful");

    res.status(200).json(data);
  } catch (err) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
