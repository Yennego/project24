// config/db.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//environment variables
dotenv.config();

// Get the MongoDB connection URI from environment variables
const dbURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
