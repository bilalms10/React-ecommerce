import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./contextpage";
import "./signup.css";

function Signup() {
  const { setUserDetails } = useContext(myContext);
  const navigate = useNavigate();

  const [userfullname, setUserFullname] = useState("");
  const [userage, setUserage] = useState("");
  const [usernumber, setUsernumber] = useState("");
  const [useremail, setUseremail] = useState("");
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");

  function savebtn() {
    const newUser = {
      fullname: userfullname,
      age: userage,
      number: usernumber,
      email: useremail,
      username: username,
      password: userpassword,
    };

    setUserDetails((prevDetails) => [...prevDetails, newUser]);
    navigate("/");
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-header">Signup Page</h2>
        
        <form className="signup-form">
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input
              className="input-field fullname-field"
              type="text"
              value={userfullname}
              onChange={(e) => setUserFullname(e.target.value)}
              placeholder="Enter Full Name"
            />
          </div>
          
          <div className="input-group">
            <label className="input-label">Age</label>
            <input
              className="input-field age-field"
              type="text"
              value={userage}
              onChange={(e) => setUserage(e.target.value)}
              placeholder="Enter Age"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Phone Number</label>
            <input
              className="input-field phone-field"
              type="text"
              value={usernumber}
              onChange={(e) => setUsernumber(e.target.value)}
              placeholder="Enter Phone Number"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              className="input-field email-field"
              type="email"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              className="input-field username-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Create Username"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              className="input-field password-field"
              type="password"
              value={userpassword}
              onChange={(e) => setUserpassword(e.target.value)}
              placeholder="Create Password"
            />
          </div>
          
          <button className="signup-btn" type="button" onClick={savebtn}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

