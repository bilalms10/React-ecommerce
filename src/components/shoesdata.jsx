import { useContext, useState } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css";
import { useNavigate } from "react-router-dom";

function ShoesData() {
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const [addedProducts, setAddedProducts] = useState([]);
  const navigate = useNavigate();

  function cartData(product) {
    if (!cart.some((item) => item.Name === product.Name)) {
      setCart([...cart, product]);
      setAddedProducts([...addedProducts, product.Name]);
    }
  }

  function toggleLike(product) {
    if (likedProducts.some((item) => item.Name === product.Name)) {
      setLikedProducts(likedProducts.filter((item) => item.Name !== product.Name));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
  }

  const shoeProducts = productData.filter((product) => product.Type === "Shoes");

  function toCart() {
    navigate("/cart");
  }
  function toHome() {
    navigate("/home");
  }
  function toMobiles() {
    navigate("/mobilesdata");
  }
  function toFashion() {
    navigate("/fashiondata");
  }
  function toLiked() {
    navigate("/likedProducts");
  }

  return (
    <div className="productdata-data-container">
      <h1>Shoes</h1>
      <div className="fullnav">
        <div className="navtxt">
          <h3>NEXTBUY</h3>
        </div>
        <div className="navigate-btns">
          <button className="navbtns" onClick={toHome}>Home</button>
          <button className="navbtns" onClick={toFashion}>Fashion</button>
          <button className="navbtns" onClick={toMobiles}>Mobiles</button>
          <button className="navbtns" onClick={toCart}>View Cart</button>
          <button className="navbtns" onClick={toLiked}>Liked Products</button>
        </div>
      </div>
      <div className="product-grid">
        {shoeProducts.map((shoes, index) => (
          <div key={index} className="product-card">
            {/* <div className="product-image">{shoes.Image}</div> */}
            <img className="product-image" src={shoes.Image} alt={shoes.name} />
            <div className="product-details">
              <h2>{shoes.Name}</h2>
              <p className="description">{shoes.Description}</p>
              <p className="price">Price: ₹{shoes.Price}</p>
              <p className="colour">Colour: {shoes.Colour}</p>
              <button
                onClick={() => cartData(shoes)}
                className="buy-btn"
                disabled={addedProducts.includes(shoes.Name)}
              >
                {addedProducts.includes(shoes.Name) ? "Added to Cart" : "Add to Cart"}
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
