// DepartmentForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { createDepartment } from "../../services/departmentApi";
import { useHistory } from "react-router-dom";
import "./DepartmentStyles.css";

const DepartmentForm = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send department data to the server
      await createDepartment({ name }); // Assuming your API function accepts an object with department properties
      // Redirect to DepartmentList after successful creation
      history.push("/departmentList");
    } catch (error) {
      console.error("Error creating department:", error);
    }
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
