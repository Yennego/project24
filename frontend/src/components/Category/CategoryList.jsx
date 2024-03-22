// CategoryList.jsx
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import { getAllCategories } from "../../services/categoryApi";
import "./CategoryStyles.css";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-list">
      <h2>Category List</h2>
      {categories.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryList;
