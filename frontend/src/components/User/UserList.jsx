// src/components/User/UserList.jsx
import { useEffect, useState } from "react";
import { getUsers } from "../../services/userApi";
import UserItem from "./UserItem";
import "./UserStyles.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
