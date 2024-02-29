const Staff = require("../models/staff");

//Faculties controller functions
exports.getAllStaves = async (req, res) => {
  try {
    const staves = await Staff.find();
    res.status(200).json(staves);
  } catch (error) {
    console.error("Error fetching staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(staff);
  } catch (error) {
    console.error("Error fetching staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createStaff = async (req, res) => {
  try {
    const newStaff = new Staff({
      name: req.body.name,
      department: req.body.department,
    });
    await newStaff.save();

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      roles: "staff",
      staff: newStaff._id,
    });

    await newUser.save();

    res.status(201).json({ newStaff, newUser });
  } catch (error) {
    console.error("Error creating staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(updatedStaff);
  } catch (error) {
    console.error("Error updating staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
    if (!deletedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (error) {
    console.error("Error deleting staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
