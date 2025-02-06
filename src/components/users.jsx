import { useContext } from "react";
import { myContext } from "./contextpage";

function Users() {
  const { userDetails, loginLogs } = useContext(myContext);

  return (
    <div>
      

      <h2>Users Who Logged In</h2>
      
        <ul>
          {loginLogs.map((user, index) => (
            <li key={index}>
              <strong>Full Name:</strong> {user.fullname} <br />
              <strong>Username:</strong> {user.username} <br />
              <strong>Age:</strong> {user.age} <br />
              <strong>Number:</strong> {user.number} <br />
              <strong>Email:</strong> {user.email} <br />
              <hr />
            </li>
          ))}
        </ul>
      
    </div>
  );
}

export default Users;


