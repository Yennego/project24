// CategoryDetail.jsx
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCategoryById } from "../../services/categoryApi";
import "./CategoryStyles.css";

const CategoryDetail = ({ match }) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryData = await getCategoryById(match.params.id);
        setCategory(categoryData);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [match.params.id]);

  return (
    <div className="category-detail-container">
      <h2 className="category-detail-title">Category Detail</h2>
      {category && (
        <div>
          <h3>{category.name}</h3>
          <p className="category-detail-description">
            Description: {category.description}
          </p>
          {/* Display other category details */}
        </div>
      )}
    </div>
  );
};

CategoryDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CategoryDetail;
