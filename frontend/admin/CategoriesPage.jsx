//admin/category
import CategoryList from "../src/components/Category/CategoryList";
import CategoryDetail from "../src/components/Category/CategoryDetail";
import CategoryForm from "../src/components/Category/CategoryForm";
import CategoryItem from "../src/components/Category/CategoryItem";

const CategoriesPage = () => {
  return (
    <div>
      <h1>Categories</h1>
      <CategoryList />
      <CategoryDetail />
      <CategoryForm />
      <CategoryItem />
    </div>
  );
};

export default CategoriesPage;
