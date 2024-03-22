// import React from "react";
import PropTypes from "prop-types";
import "./CategoryStyles.css";

const CategoryItem = ({ category }) => {
  return (
    <div className="category-item">
      <h3 className="category-item-name">{category.name}</h3>
      <p>Description: {category.description}</p>
      {/* Add additional details if needed */}
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    // Add additional PropTypes as needed
  }).isRequired,
};

export default CategoryItem;
