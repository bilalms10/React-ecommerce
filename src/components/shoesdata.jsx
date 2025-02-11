import { useContext } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css";
import { useNavigate } from "react-router-dom";

function ShoesData() {
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const shoeProducts = productData.filter((product) => product.Type === "Shoes");

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
      <h1>Shoes</h1>
      <div className="fullnav">
        <div className="navtxt"><h3>NEXTBUY</h3></div>
        <div className="navigate-btns">
          <button className="navbtns" onClick={() => navigate("/home")}>Home</button>
          <button className="navbtns" onClick={() => navigate("/fashiondata")}>Fashion</button>
          <button className="navbtns" onClick={() => navigate("/mobilesdata")}>Mobiles</button>
          <button className="navbtns" onClick={() => navigate("/cart")}>View Cart</button>
          <button className="navbtns" onClick={() => navigate("/likedProducts")}>Liked Products</button>
        </div>
      </div>
      <div className="product-grid">
        {shoeProducts.map((shoes, index) => (
          <div key={index} className="product-card">
            <div className="product-image">{shoes.Image}</div>
            <div className="product-details">
              <h2>{shoes.Name}</h2>
              <p className="description">{shoes.Description}</p>
              <p className="price">Price: ₹{shoes.Price}</p>
              <p className="colour">Colour: {shoes.Colour}</p>
              <button
                onClick={() => cartData(shoes)}
                className="buy-btn"
                disabled={cart.some((item) => item.Name === shoes.Name)}
              >
                {cart.some((item) => item.Name === shoes.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => toggleLike(shoes)}
                className="like-btn"
              >
                {likedProducts.some((item) => item.Name === shoes.Name) ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoesData;

