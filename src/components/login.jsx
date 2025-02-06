
import './login.css'
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { myContext } from "./contextpage";

function Login() {
  const { userDetails, setLoggedInUser, loginLogs, setLoginLogs } = useContext(myContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginbtn(e) {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      const adminUser = { fullname: "Admin", username: "admin", role: "admin" };
      setLoggedInUser(adminUser);
      setLoginLogs((prevLogs) => [...prevLogs, adminUser]);
      navigate("/adminpage");
      return;
    }

    const user = userDetails.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedInUser(user);
      setLoginLogs((prevLogs) => [...prevLogs, user]);
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h3>USER LOGIN</h3>
        </div>
        <form className="login-nav" onSubmit={loginbtn}>
          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              className="input-field username-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          
          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              className="input-field password-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <div className="login-buttons">
            <button className="login-btn" type="submit">Login</button>
            <button className="forgot-password" type="button">
              Forgot Password?
            </button>
          </div>

          <div className="signup-section">
            <button className="signup-btn" type="button" onClick={() => navigate("/signup")}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
