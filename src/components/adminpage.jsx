import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  function toUsers() {
    navigate("/users");
  }

  function toEditProducts() {
    navigate("/editproducts");
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={toUsers}>View All Users</button>
      <button onClick={toEditProducts}>Edit Products</button>
    </div>
  );
}

export default AdminPage;
