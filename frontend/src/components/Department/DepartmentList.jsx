// DepartmentList.jsx
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import DepartmentItem from "./DepartmentItem";
import { getAllDepartments } from "../../services/departmentApi"; // Import the getAllDepartments function
import "./DepartmentStyles.css";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const departmentsData = await getAllDepartments(); // Fetch departments from the API
        setDepartments(departmentsData);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div className="department-list">
      <h2>Department List</h2>
      {departments.map((department) => (
        <DepartmentItem key={department._id} department={department} />
      ))}
    </div>
  );
};

export default DepartmentList;
