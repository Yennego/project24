import { useEffect, useState } from "react";
import { getDocuments } from "../../services/documentApi";
import DocumentItem from "./DocumentItem";
import "./DocumentStyles.css";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const documentsData = await getDocuments();
        setDocuments(documentsData);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="document-list">
      <h2>Document List</h2>
      {documents.map((document) => (
        <div key={document._id} className="document-list-item">
          <DocumentItem document={document} />
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
