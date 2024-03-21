// DepartmentItem.jsx
// import React from "react";
import PropTypes from "prop-types";
import "./DepartmentStyles.css";

const DepartmentItem = ({ department }) => {
  return (
    <div className="department-item">
      <h3 className="department-item-name">{department.name}</h3>
      {/* Add additional details if needed */}
    </div>
  );
};

DepartmentItem.propTypes = {
  department: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // Add additional proptypes for other department details if needed
  }).isRequired,
};

export default DepartmentItem;
