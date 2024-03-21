import { useEffect, useState } from "react";
import { getDocumentById } from "../../services/documentApi";
import "./DocumentStyles.css";

import PropTypes from "prop-types";

const DocumentDetail = ({ match }) => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const documentData = await getDocumentById(match.params.id);
        setDocument(documentData);
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
  }, [match.params.id]);

  return (
    <div>
      <h2>Document Detail</h2>
      {document && (
        <div className="document-detail-container">
          <h3 className="document-title">{document.title}</h3>
          <p className="document-abstract">Abstract: {document.abstract}</p>
          <p>Author: {document.author}</p>
          <p>
            File:{" "}
            <a
              href={document.filePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Document
            </a>
          </p>
          {/* Display other document details */}
        </div>
      )}
    </div>
  );
};

// Define PropTypes for DocumentDetail component
DocumentDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired, // Ensure id is a required string
    }).isRequired,
  }).isRequired,
};

export default DocumentDetail;
