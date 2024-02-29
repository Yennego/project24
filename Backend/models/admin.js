// models/admin.js
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
    enum: ["admin"],
    default: "admin",
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
s;
