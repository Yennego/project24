import { useEffect, useState } from "react";
import { getDepartmentById } from "../../services/departmentApi";
import "./DepartmentStyles.css";
import PropTypes from "prop-types";

const DepartmentDetail = ({ match }) => {
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const departmentData = await getDepartmentById(match.params.id);
        setDepartment(departmentData);
      } catch (error) {
        console.error("Error fetching department:", error);
      }
    };

    fetchDepartment();
  }, [match.params.id]);

  return (
    <div className="department-detail-container">
      <h2 className="department-detail-title">Department Detail</h2>
      {department && (
        <div>
          <h3>{department.name}</h3>
          {/* Display other department details */}
        </div>
      )}
    </div>
  );
};

DepartmentDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DepartmentDetail;
