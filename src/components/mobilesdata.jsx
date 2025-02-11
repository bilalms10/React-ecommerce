import "./productdatas.css";
import { useContext } from "react";
import { myContext } from "./contextpage";
import { useNavigate } from "react-router-dom";

function MobilesData() {
  const { Products, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const mobileProducts = Products.filter((product) => product.Type === "Mobile");

  function cartData(product) {
    if (!cart.some((item) => item.Name === product.Name)) {
      setCart([...cart, product]);
    }
  }

  function toggleLike(product) {
    setLikedProducts(
      likedProducts.some((item) => item.Name === product.Name)
        ? likedProducts.filter((item) => item.Name !== product.Name)
        : [...likedProducts, product]
    );
  }

  return (
    <div className="productdata-data-container">
      <h1>Mobile Products</h1>
      <div className="fullnav">
        <div className="navtxt"><h3>NEXTBUY</h3></div>
        <div className="navigate-btns">
          <button className="navbtns" onClick={() => navigate("/home")}>Home</button>
          <button className="navbtns" onClick={() => navigate("/fashiondata")}>Fashion</button>
          <button className="navbtns" onClick={() => navigate("/shoesdata")}>Shoes</button>
          <button className="navbtns" onClick={() => navigate("/cart")}>View Cart</button>
          <button className="navbtns" onClick={() => navigate("/likedProducts")}>Liked Products</button>
        </div>
      </div>
      <div className="product-grid">
        {mobileProducts.map((mobile, index) => (
          <div key={index} className="product-card">
            <div className="product-image">{mobile.Image}</div>
            <div className="product-details">
              <h2>{mobile.Name}</h2>
              <p className="description">{mobile.Description}</p>
              <p className="price">Price: ₹{mobile.Price}</p>
              <p className="colour">Colour: {mobile.Colour}</p>
              <button
                onClick={() => cartData(mobile)}
                className="buy-btn"
                disabled={cart.some((item) => item.Name === mobile.Name)}
              >
                {cart.some((item) => item.Name === mobile.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => toggleLike(mobile)}
                className="like-btn"
              >
                {likedProducts.some((item) => item.Name === mobile.Name) ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobilesData;



