import './login.css'
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { myContext } from "./contextpage";

function Login() {
  const { userDetails } = useContext(myContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginbtn(e) {
    e.preventDefault();

    const user = userDetails.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
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
        <form className="nav" onSubmit={loginbtn}>
          <h6>Username</h6>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <h6>Password</h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="logfrgt">
            <button className="loginbtn" type="submit">
              Login
            </button>
            <h6 className="frgt">Forget Password?</h6>
          </div>
          <div className="signupdiv">
            <button
              type="button"
              className="signupbtn"
              onClick={signupBtn}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;