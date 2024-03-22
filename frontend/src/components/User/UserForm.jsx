// src/components/User/UserForm.js
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser } from "../../services/userApi";
import "./UserStyles.css";

const UserForm = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roles: "admin",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData); // Call createUser function from userApi service
      // Optionally, you can redirect to the user list page after successful creation
      history.push("/UserList");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="user-form">User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="user-form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="user-form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="user-form-input"
        />
        <label htmlFor="roles">Role:</label>
        <select
          name="roles"
          id="roles"
          value={formData.roles}
          onChange={handleChange}
          className="user-form-select"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit" className="user-form-submit">
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
