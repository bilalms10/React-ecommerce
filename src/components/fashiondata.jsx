import { useContext, useState } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css";
import { useNavigate } from "react-router-dom";

function FashionData() {
  const { Products, cart, setCart, likedProducts, setLikedProducts } = useContext(myContext);
  const [addedProducts, setAddedProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]); 
  const navigate = useNavigate();

  const fashionProducts = Products.filter((product) => product.Type === "Fashion");

  function cartData(product) {
    if (!cart.some((item) => item.Name === product.Name)) {
      setCart([...cart, product]);
      setAddedProducts([...addedProducts, product.Name]);
    }
  }

  
  function likeProduct(product) {
    if (!likedItems.includes(product.Name)) {
      setLikedItems([...likedItems, product.Name]);
      setLikedProducts([...likedProducts, product]); 
    }
  }

  function toCart() {
    navigate("/cart");
  }

  function toHome() {
    navigate("/home");
  }

  function toMobiles() {
    navigate("/mobilesdata");
  }

  function toShoes() {
    navigate("/shoesdata");
  }

  function toLiked() {
    navigate("/likedProducts");
  }

  return (
    <div className="productdata-data-container">
      <h1>Fashion Products</h1>
      <div className="fullnav">
        <div className="navtxt">
          <h3>NEXTBUY</h3>
        </div>
        <div className="navigate-btns">
          <button className="navbtns" onClick={toHome}>Home</button>
          <button className="navbtns" onClick={toMobiles}>Mobiles</button>
          <button className="navbtns" onClick={toShoes}>Shoes</button>
          <button className="navbtns" onClick={toCart}>View Cart</button>
          <button className="navbtns" onClick={toLiked}>Liked Products</button>
        </div>
      </div>
      <div className="product-grid">
        {fashionProducts.map((fashion, index) => (
          <div key={index} className="product-card">
            <div className="product-image">{fashion.Image}</div>
            <div className="product-details">
              <h2>{fashion.Name}</h2>
              <p className="description">{fashion.Description}</p>
              <p className="price">Price: ₹{fashion.Price}</p>
              <p className="colour">Colour: {fashion.Colour}</p>
              <button
                onClick={() => cartData(fashion)}
                className="buy-btn"
                disabled={addedProducts.includes(fashion.Name)}
              >
                {addedProducts.includes(fashion.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => likeProduct(fashion)}
                className="like-btn"
                disabled={likedItems.includes(fashion.Name)}
              >
                {likedItems.includes(fashion.Name) ? "Liked" : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionData;
