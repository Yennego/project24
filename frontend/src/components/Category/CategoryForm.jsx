// CategoryForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { createCategory } from "../../services/categoryApi";
import "./CategoryStyles.css";

const CategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCategory = await createCategory({ name, description });
      onSubmit(newCategory); // Pass the new category data to the parent component
      setName("");
      setDescription("");
      history.push("/categoryList");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="category-form">
      <h2>Category Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="category-form-input"
        />
        <textarea
          placeholder="Category Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="category-form-textarea"
        ></textarea>
        <button type="submit" className="category-form-submit">
          Add Category
        </button>
      </form>
    </div>
  );
};

CategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CategoryForm;
