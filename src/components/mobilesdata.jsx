import "./productdatas.css";
import { useState } from "react";
import { useContext } from "react";
import { myContext } from "./contextpage";
import { useNavigate } from "react-router-dom";

function MobilesData() {
  const { Products, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const [addedProducts, setAddedProducts] = useState([]); 
  const navigate = useNavigate();

  function cartData(product) {
    if (!cart.some((item) => item.Name === product.Name)) {
      setCart([...cart, product]);
      setAddedProducts([...addedProducts, product.Name]); 
    }
  }

  const mobileProducts = Products.filter((product) => product.Type === "Mobile");

  function toCart() {
    navigate("/cart");
  }
  function toHome() {
    navigate("/home");
  }
  function toFashion() {
    navigate("/fashiondata");
  }
  function toShoes() {
    navigate("/shoesdatas");
  }

  return (
    

    <div className="productdata-data-container">
      <h1>Mobile Products</h1>
      <div className="fullnav">
      <div className="navtxt"> <h3>NEXTBUY</h3> </div>
      <div className="navigate-btns">
      <button className="navbtns" onClick={toHome}>Home</button>
      <button className="navbtns" onClick={toFashion}>Fashion</button>
      <button className="navbtns" onClick={toShoes}>Shoes</button>
      <button className="navbtns" onClick={toCart}>View Cart</button>
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
                disabled={addedProducts.includes(mobile.Name)}
              >
                {addedProducts.includes(mobile.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobilesData;

