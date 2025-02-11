import { useContext } from "react";
import { myContext } from "./contextpage";
import { useNavigate } from "react-router-dom";
import "./likedProducts.css";

function LikedProducts() {
  const { likedProducts, setLikedProducts } = useContext(myContext);
  const navigate = useNavigate();

  function removeLikedProduct(product) {
    setLikedProducts(likedProducts.filter((item) => item.Name !== product.Name));
  }

  function toHome() {
    navigate("/home");
  }

  return (
    <div className="liked-products-container">
      <h1>Liked Products</h1>
      <button onClick={toHome}>Home</button>
      <div className="liked-products-grid">
        {likedProducts.length > 0 ? (
          likedProducts.map((product, index) => (
            <div key={index} className="liked-product-card">
              <img className="liked-product-image" src={product.Image} alt={product.Name} />
              <div className="liked-product-details">
                <h2>{product.Name}</h2>
                <p>{product.Description}</p>
                <p>Price: ₹{product.Price}</p>
                <button 
                  className="remove-btn"
                  onClick={() => removeLikedProduct(product)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No liked products yet.</p>
        )}
      </div>
    </div>
  );
}

export default LikedProducts;

