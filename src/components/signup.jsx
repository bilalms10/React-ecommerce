import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./contextpage";

function Signup() {
  const { setUserDetails } = useContext(myContext)

  const navigate = useNavigate();

  const [userfullname, setUserFullname] = useState("");
  const [userage, setUserage] = useState("");
  const [usernumber, setUsernumber] = useState("");
  const [useremail, setUseremail] = useState("");
  const [username, setUsername] = useState("")
  const [userpassword, setUserpassword] = useState("");

  function savebtn() {
    const newUser = {
      fullname: userfullname,
      age: userage,
      number: usernumber,
      email: useremail,
      username: username,
      password: userpassword,
    }
    setUserDetails((prevDetails) => [...prevDetails, newUser]);
    navigate("/");



  }

  return (

    <div className="main">
      <div className="nav">
        <h2 className="header">Signup Page</h2>
        <br />
        <h5>Type Your Fullname</h5>
        <input
          name="fullname"
          type="text"
          value={userfullname}
          onChange={(e) => setUserFullname(e.target.value)}
          placeholder="Full Name"
        />
        <h5>Type Your Age</h5>
        <input
          name="age"
          type="text"
          value={userage}
          onChange={(e) => setUserage(e.target.value)}
          placeholder="Age"
        />
        <h5>Type Your Number</h5>
        <input
          name="number"
          type="text"
          value={usernumber}
          onChange={(e) => setUsernumber(e.target.value)}
          placeholder="Number"
        />
        <h5>Type Your Email</h5>
        <input
          name="email"
          type="text"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
          placeholder="Email ID"
        />
        <h5>Create Username</h5>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type Password"
        />
        <h5>Create Password</h5>
        <input
          type="text"
          name="password"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
          placeholder="Type Password"
        />
        <br />
        <button onClick={savebtn}>Create</button>
      </div>
    </div>
  )
}
export default Signup;