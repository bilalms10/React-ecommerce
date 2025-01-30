import { useContext } from "react";
import { myContext } from "./contextpage";
import "./likedProducts.css";

function LikedProducts() {
  const { likedProducts, setLikedProducts } = useContext(myContext);

  const removeLikedProduct = (product) => {
    setLikedProducts(likedProducts.filter(item => item.Name !== product.Name));
  };
  


  return (
    <div className="liked-products-container">
      <h1>Liked Products</h1>
      <div className="liked-products-grid">
        {likedProducts.length > 0 ? (
          likedProducts.map((product, index) => (
            <div key={index} className="liked-product-card">
              <div className="liked-product-image">{product.Image}</div>
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
