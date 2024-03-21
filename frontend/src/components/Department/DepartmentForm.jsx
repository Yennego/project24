// DepartmentForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import "./DepartmentStyles.css";

const DepartmentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName("");
  };

  return (
    <div className="department-form">
      <h2>Department Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Department Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="department-form-input"
        />
        <button type="submit" className="department-form-submit">
          Add Department
        </button>
      </form>
    </div>
  );
};

DepartmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DepartmentForm;
