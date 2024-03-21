// CategoryDetail.jsx
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCategoryById } from "../../services/categoryApi";

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
    <div>
      <h2>Category Detail</h2>
      {category && (
        <div>
          <h3>{category.name}</h3>
          <p>Description: {category.description}</p>
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
