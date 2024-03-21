// DepartmentList.jsx
// import React from "react";
import PropTypes from "prop-types";
import DepartmentItem from "./DepartmentItem";
import "./DepartmentStyles.css";

const DepartmentList = ({ departments }) => {
  return (
    <div className="department-list">
      <h2>Department List</h2>
      {departments.map((department) => (
        <DepartmentItem key={department._id} department={department} />
      ))}
    </div>
  );
};

DepartmentList.propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // Add additional proptypes for other department details if needed
    })
  ).isRequired,
};

export default DepartmentList;
