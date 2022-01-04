// import { useState } from "react";
function UserProfile(props) {
  const { getUsersApi, users } = props;

  const usersList = (users) => {
    return users.userList.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    ));
  };

  const handleClick = () => {
    getUsersApi();
  };

  return (
    <div>
      <h1>User List</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {usersList(users)}
        </tbody>
      </table>
      <button onClick={handleClick}>GetUsers</button>
    </div>
  );
}

export default UserProfile;
