import "./productdatas.css";
import { useState } from "react";
import { useContext } from "react";
import { myContext } from "./contextpage";
import { useNavigate } from "react-router-dom";

function MobilesData() {
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const [addedProducts, setAddedProducts] = useState([]); 
  const [likedItems, setLikedItems] = useState([]); 
  const navigate = useNavigate();

  function cartData(product) {
    if (!cart.some((item) => item.Name === product.Name)) {
      setCart([...cart, product]);
      setAddedProducts([...addedProducts, product.Name]); 
    }
  }

  const mobileProducts = productData.filter((product) => product.Type === "Mobile");

  function toggleLike(product) {
    setLikedProducts(
      likedProducts.some((item) => item.Name === product.Name)
        ? likedProducts.filter((item) => item.Name !== product.Name)
        : [...likedProducts, product]
    );
  }

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
    navigate("/shoesdata");
  }
  function toLiked() {
    navigate("/likedProducts");
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
      <button className="navbtns" onClick={toLiked}>Liked Products</button>
      </div>
      </div>
      <div className="product-grid">
        {mobileProducts.map((mobile, index) => (
          <div key={index} className="product-card">
            <img className="product-image" src={mobile.Image} alt={mobile.name} />
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

