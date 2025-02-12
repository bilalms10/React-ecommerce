import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./contextpage";
import "./signup.css";

function Signup() {
  const { userDetails, setUserDetails } = useContext(myContext);
  const navigate = useNavigate();

  

  const [userfullname, setUserFullname] = useState("");
  const [userage, setUserage] = useState("");
  const [usernumber, setUsernumber] = useState("");
  const [useremail, setUseremail] = useState("");
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [error, setError] = useState("");

  

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  function savebtn() {
    if (!userfullname || !userage || !usernumber || !useremail || !username || !userpassword) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(useremail)) {
      setError("Invalid email format");
      return;
    }

    const userExists = userDetails.some(
      (user) =>
        user.username === username ||
        user.email === useremail ||
        user.number === usernumber
    );

    if (userExists) {
      setError("Username, Email, or Phone Number already in use");
      return;
    }

    const newUser = {
      fullname: userfullname,
      age: userage,
      number: usernumber,
      email: useremail,
      username: username,
      password: userpassword,
    };

    setUserDetails([...userDetails, newUser]);
    navigate("/");
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-header">Signup Page</h2>
        
        {error && <p className="error-message">{error}</p>}

        <form className="signup-form">
          <input type="text" placeholder="Full Name" value={userfullname} onChange={(e) => setUserFullname(e.target.value)} />
          <input type="text" placeholder="Age" value={userage} onChange={(e) => setUserage(e.target.value)} />
          <input type="text" placeholder="Phone Number" value={usernumber} onChange={(e) => setUsernumber(e.target.value)} />
          <input type="email" placeholder="Email" value={useremail} onChange={(e) => setUseremail(e.target.value)} />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
          
          <button type="button" onClick={savebtn}>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
