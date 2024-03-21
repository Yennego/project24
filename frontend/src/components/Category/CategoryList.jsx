// CategoryList.jsx
// import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => {
  return (
    <div>
      <h2>Category List</h2>
      {categories.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
