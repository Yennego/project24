import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDocument } from "../../services/documentApi";
import "./DocumentStyles.css";

const DocumentForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    author: "",
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //send data to server
      await createDocument(formData);
      // Redirect to the departlist page after successful creation
      history.push("/DepartmentList");
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="document-form">
      <h2>Document Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="document-form-input"
        />
        <textarea
          name="abstract"
          placeholder="Abstract"
          value={formData.abstract}
          onChange={handleChange}
          className="document-form-textarea"
        ></textarea>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="document-form-input"
        />
        <button type="submit" className="document-form-submit">
          Create Document
        </button>
      </form>
    </div>
  );
};

export default DocumentForm;
