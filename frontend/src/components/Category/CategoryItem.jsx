// import React from "react";
import PropTypes from "prop-types";

const CategoryItem = ({ category }) => {
  return (
    <div>
      <h3>{category.name}</h3>
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
