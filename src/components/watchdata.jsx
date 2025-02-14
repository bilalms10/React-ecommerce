import { useContext } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css";
import { useNavigate } from "react-router-dom";

function WatchData() {
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const watchProducts = productData.filter((product) => product.Type === "Watch");

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

  function navigateTo(route) {
    navigate(route);
  }

  return (
    <div className="productdata-data-container">
      <h1>Smart Watches</h1>
      <div className="fullnav">
        <div className="navtxt">
          <h3>NEXTBUY</h3>
        </div>
        <div className="navigate-btns">
          <button className="navbtns" onClick={() => navigateTo("/home")}>Home</button>
          <button className="navbtns" onClick={() => navigateTo("/mobilesdata")}>Mobiles</button>
          <button className="navbtns" onClick={() => navigateTo("/shoesdata")}>Shoes</button>
          <button className="navbtns" onClick={() => navigateTo("/cart")}>View Cart</button>
          <button className="navbtns" onClick={() => navigateTo("/likedProducts")}>Liked Products</button>
        </div>
      </div>
      <div className="product-grid">
        {watchProducts.map((watch, index) => (
          <div key={index} className="product-card">
            <img className="product-image" src={watch.Image} alt={watch.name} />
            <div className="product-details">
              <h2>{watch.Name}</h2>
              <p className="description">{watch.Description}</p>
              <p className="price">Price: ₹{watch.Price}</p>
              <p className="colour">Colour: {watch.Colour}</p>
              <button
                onClick={() => cartData(watch)}
                className="buy-btn"
                disabled={cart.some((item) => item.Name === watch.Name)}
              >
                {cart.some((item) => item.Name === watch.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => toggleLike(watch)}
                className="like-btn"
              >
                {likedProducts.some((item) => item.Name === watch.Name) ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchData;