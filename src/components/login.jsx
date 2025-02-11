import './login.css';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { myContext } from "./contextpage";

function Login() {
  const { userDetails, setLoggedInUser, loginLogs, setLoginLogs } = useContext(myContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function loginbtn(e) {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      const adminUser = { fullname: "Admin", username: "admin", role: "admin" };
      setLoggedInUser(adminUser);
      setLoginLogs([...loginLogs, adminUser]);
      navigate("/adminpage");
      return;
    }

    const user = userDetails.find(
      (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password
    );

    if (user) {
      setLoggedInUser(user);
      setLoginLogs([...loginLogs, user]);
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  }

  function toSignup(){
    navigate('/signup')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="login-title">USER LOGIN</h3>
        
        {error && <p className="error-message">{error}</p>}

        <form className="login-form" onSubmit={loginbtn}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <button type="submit">Login</button>
          <button onClick={toSignup}>SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
