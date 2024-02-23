const Faculty = require("../models/faculty");

//Faculties controller functions
exports.getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.status(200).json(faculties);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createFaculty = async (req, res) => {
  try {
    const newFaculty = new Faculty({
      name: req.body.name,
      department: req.body.department,
      user: req.body.user,
    });
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateFaculty = async (req, res) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedFaculty);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteFaculty = async (res, req) => {
  try {
    const deletedFaculty = await Faculty.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedFaculty);
  } catch (error) {
    res.status(500).json(error);
  }
};
