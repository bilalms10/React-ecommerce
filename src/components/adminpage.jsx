import "./adminpage.css";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  return (
    <div className="admin-main">
      <h2>Admin Panel</h2>
      <button className="admin-btn" onClick={() => navigate("/users")}>View Users</button>
      <button className="admin-btn" onClick={() => navigate("/editproducts")}>Manage Products</button>
      <button className="admin-btn" onClick={() => navigate("/home")}>Home</button>
    </div>
  );
}

export default AdminPage;

