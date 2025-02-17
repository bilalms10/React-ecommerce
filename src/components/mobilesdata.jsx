import "./productdatas.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./contextpage";

function MobilesData() {
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const [likedItems, setLikedItems] = useState([]); 
  const navigate = useNavigate();

  
  function cartData(product) {
    if (!cart.some((item) => item.Name === product.Name)) {
      setCart([...cart, product]);
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

  return (
    <div className="productdata-data-container">
      <h1>Mobile Products</h1>
      
      <div className="fullnav">
        <div className="navtxt"><h3>NEXTBUY</h3></div>
        <div className="navigate-btns">
          <button className="navbtns" onClick={() => navigate("/home")}>Home</button>
          <div className="product-dropdown">
  <select className="nav-dropdown" onChange={(e) => navigate(e.target.value)}>
    <option className="navbtns" value="" disabled selected>Select a Category</option>
    <option className="navbtns" value="/fashiondata">Fashion</option>
    <option className="navbtns" value="/shoesdata">Shoes</option>
    <option className="navbtns" value="/laptopdata">Laptops</option>
    <option className="navbtns"value="/watchdata">Watch</option>
    <option className="navbtns" value="/televisiondata">Television</option>
  </select>
</div>
          <button className="navbtns" onClick={() => navigate("/cart")}>View Cart</button>
          <button className="navbtns" onClick={() => navigate("/likedProducts")}>Liked Products</button>
        </div>
      </div>

      <div className="product-grid">
        {mobileProducts.map((mobile, index) => (
          <div key={index} className="product-card">
            <img className="product-image" src={mobile.Image} alt={mobile.Name} />
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

              
              <button onClick={() => toggleLike(mobile)} className="like-btn">
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



