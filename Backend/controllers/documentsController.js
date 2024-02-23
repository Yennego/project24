const Document = require("../models/document");

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createDocument = async (req, res) => {
  try {
    const document = new Document(req.body);
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};
