//documentController
const Document = require("../models/document");

exports.uploadDocument = async (req, res) => {
  try {
    const user = req.user;
    if (!user || !user._id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // const author = req.body.author;
    // Create a new document record in the database
    const document = new Document({
      title: req.body.title,
      abstract: req.body.abstract,
      user: user._id,
      author: req.body.author,
      filePath: req.file.path, // Store the file path in the database
    });
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json(document);
  } catch (error) {
    console.error("Error fetching document:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createDocument = async (req, res) => {
  try {
    const user = req.user;
    if (!user || !user.roles.includes("admin")) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    console.log("Request body:", req.body);

    const { author, abstract, title, user: userId } = req.body;

    if (!author || !abstract || !title || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const document = new Document({
      title: title,
      abstract: abstract,
      user: user._id, // Use user._id directly
      author: author,
    });

    await document.save();
    res.status(201).json(document);
  } catch (error) {
    console.error("Error creating document:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateDocument = async (req, res) => {
  try {
    const user = req.user;
    if (!user || !user.roles.includes("admin")) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    const document = await Document.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json(document);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const user = req.user;
    if (!user || !user.roles.includes("admin")) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
