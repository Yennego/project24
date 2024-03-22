import { Route } from "react-router-dom";
import CategoriesPage from "../CategoriesPage";
import DepartmentsPage from "../DepartmentsPage";
import DocumentsPage from "../DocumentsPage";
import UsersPage from "../UsersPage";

function AdminRoutes() {
  return (
    <>
      <Route path="categories" element={<CategoriesPage />} />
      <Route path="departments" element={<DepartmentsPage />} />
      <Route path="documents" element={<DocumentsPage />} />
      <Route path="users" element={<UsersPage />} />
    </>
  );
}

export default AdminRoutes;
