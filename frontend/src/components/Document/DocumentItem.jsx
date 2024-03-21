// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./DocumentStyles.css";

const DocumentItem = ({ document }) => {
  return (
    <div className="document-item">
      <h3 className="document-item-title">{document.title}</h3>
      <p className="document-item-info">Author: {document.author}</p>
      <Link to={`/documents/${document._id}`} className="document-item-info">
        View Details
      </Link>
    </div>
  );
};

// Define PropTypes for DocumentItem component
DocumentItem.propTypes = {
  document: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // Add other required fields here
  }).isRequired,
};

export default DocumentItem;
