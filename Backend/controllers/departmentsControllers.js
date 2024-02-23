const Department = require("../models/department");

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getDepartment = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};
