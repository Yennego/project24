//admin/department
import DepartmentList from "../src/components/Department/DepartmentList";
import DepartmentDetail from "../src/components/Department/DepartmentDetail";
import DepartmentForm from "../src/components/Department/DepartmentForm";
import DepartmentItem from "../src/components/Department/DepartmentItem";

const DepartmentsPage = () => {
  return (
    <div>
      <h1>Departments</h1>
      <DepartmentList />
      <DepartmentDetail />
      <DepartmentForm />
      <DepartmentItem />
    </div>
  );
};

export default DepartmentsPage;
