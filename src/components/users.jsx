import { useContext } from "react";
import { myContext } from "./contextpage";
import { useNavigate } from "react-router-dom";

function Users() {
  const { loginLogs } = useContext(myContext);
  const navigate = useNavigate();

  return (
    <div className="users-container">
      <h2>Users Who Logged In</h2>
      <button className="admin-btn" onClick={() => navigate('/adminpage')}>Back to Admin</button>
      
      <ul className="users-list">
        {loginLogs.length > 0 ? (
          loginLogs.map((user, index) => (
            <li key={index} className="user-card">
              <strong>Full Name:</strong> {user.fullname} <br />
              <strong>Username:</strong> {user.username} <br />
              <strong>Age:</strong> {user.age} <br />
              <strong>Phone:</strong> {user.number} <br />
              <strong>Email:</strong> {user.email} <br />
            </li>
          ))
        ) : (
          <p>No users have logged in yet.</p>
        )}
      </ul>
    </div>
  );
}

export default Users;


