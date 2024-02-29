// models/student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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
    enum: ["student"],
    default: "student",
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
