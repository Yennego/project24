//admin/User
import UserList from "../src/components/User/UserList";
import UserDetail from "../src/components/User/UserDetail";
import UserForm from "../src/components/User/UserForm";
import UserItem from "../src/components/User/UserItem";

const UserPage = () => {
  return (
    <div>
      <h1>Documents</h1>
      <UserList />
      <UserDetail />
      <UserForm />
      <UserItem />
    </div>
  );
};

export default UserPage;
