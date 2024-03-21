// CategoryForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const CategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div>
      <h2>Category Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Category Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

CategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CategoryForm;
