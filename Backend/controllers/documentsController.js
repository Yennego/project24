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
    const user = req.user;
    console.log("User:", user);
    if (!user) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // console.log("Decoded JWT payload:", user);
    console.log("User roles dc:", user.roles);

    let documents;
    if (user.roles.includes("admin") || user.roles.includes("user")) {
      documents = await Document.find();
      res.status(200).json(documents);
    } else {
      return res.status(403).json({ message: "authorized" });
    }
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
      user: user._id,
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

    // extracting fields from request body to update document
    const { title, abstract, author } = req.body;

    //construct update object with provided fields
    const updateFields = {};
    if (title) {
      updateFields.title = title;
    }
    if (abstract) {
      updateFields.abstract = abstract;
    }
    if (author) {
      updateFields.author = author;
    }

    const document = await Document.findByIdAndUpdate(
      req.params.id,
      updateFields,
      {
        new: true,
      }
    );
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
