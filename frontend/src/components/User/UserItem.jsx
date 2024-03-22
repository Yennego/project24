// import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./UserStyles.css";

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <h3 className="user-item-name">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <Link to={`/users/${user._id}`}>View Details</Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItem;
