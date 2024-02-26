const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  roles: {
    type: String,
    enum: ["student", "staff", "admin"],
    default: "student",
  },

  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
