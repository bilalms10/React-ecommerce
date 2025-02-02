import './login.css';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { myContext } from "./contextpage";

function Login() {
  
  const { userDetails, setLoggedInUser } = useContext(myContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginbtn(e) {
    

    if (username === "admin" && password === "admin") {
      setLoggedInUser({ username: "admin" });
      navigate("/adminpage");
      return;
    }

    const user = userDetails.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedInUser(user);  
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  }

  function signupBtn() {
    navigate("/signup");
  }

  return (
    <div className="bg">
      <div className="main">
        <div className="header">
          <h3>USER LOGIN</h3>
        </div>
        <form className="nav" onSubmit={(e) => loginbtn(e)}> 
          <h6>Username</h6>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <h6>Password</h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div className="logfrgt">
            <button className="loginbtn" type="submit">
              Login
            </button>
            <button
              className="frgt"
              type="button"
              onClick={() => alert("Reset password feature coming soon!")}
            >
              Forgot Password?
            </button>
          </div>
          <div className="signupdiv">
            <button type="button" className="signupbtn" onClick={signupBtn}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

