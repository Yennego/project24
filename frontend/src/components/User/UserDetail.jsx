// src/components/User/UserDetail.js
import { useEffect, useState } from "react";
import { getUserById } from "../../services/userApi";
import PropTypes from "prop-types";

const UserDetail = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(match.params.id); // Use getUserById from userApi
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [match.params.id]);

  return (
    <div>
      <h2>User Detail</h2>
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Role: {user.roles.join(", ")}</p>
          {/* Display other user details */}
        </div>
      )}
    </div>
  );
};

// Define PropTypes for UserDetail component
UserDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired, // Ensure id is a required string
    }).isRequired,
  }).isRequired,
};

export default UserDetail;
