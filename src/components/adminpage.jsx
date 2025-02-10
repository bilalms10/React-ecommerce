import './adminpage.css'
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  function toUsers() {
    navigate("/users");
  }

  function toEditProducts() {
    navigate("/editproducts");
  }

  function toHome(){
    navigate("/home");
  }

  return (
    <div className="users-main">
      <h2>Admin Page</h2>
      <button className="users-btn" onClick={toUsers}>View All Users</button>
      <button className="users-btn" onClick={toEditProducts}>Edit Products</button>
      <button className="users-btn" onClick={toHome}>Home</button>
    </div>
  );
}

export default AdminPage;
