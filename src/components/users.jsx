import { useContext } from "react";
import { myContext } from "./contextpage";

function Users() {
  const { userDetails } = useContext(myContext);

  return (
    <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th><br />
            <th>Age</th><br />
            <th>Number</th><br />
            <th>Email</th><br />
            <th>Username</th><br />
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user, index) => (
            <tr key={index}>
              <td>{user.fullname}</td>
              <td>{user.age}</td>
              <td>{user.number}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

