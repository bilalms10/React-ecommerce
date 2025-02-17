import { useContext } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css";
import { useNavigate } from "react-router-dom";

function FashionData() {
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const fashionProducts = productData.filter((product) => product.Type === "Fashion");

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
      <h1>Fashion Products</h1>
      <div className="fullnav">
        <div className="navtxt">
          <h3>NEXTBUY</h3>
        </div>
        <div className="navigate-btns">
          <button className="navbtns" onClick={() => navigateTo("/home")}>Home</button>
          <div className="product-dropdown">
  <select className="nav-dropdown" onChange={(e) => navigate(e.target.value)}>
    <option className="navbtns" value="" disabled selected>Select a Category</option>
    <option className="navbtns" value="/mobilesdata">Mobiles</option>
    <option className="navbtns" value="/shoesdata">Shoes</option>
    <option className="navbtns" value="/laptopdata">Laptops</option>
    <option className="navbtns"value="/watchdata">Watch</option>
    <option className="navbtns" value="/televisiondata">Television</option>
  </select>
</div>
          <button className="navbtns" onClick={() => navigateTo("/cart")}>View Cart</button>
          <button className="navbtns" onClick={() => navigateTo("/likedProducts")}>Liked Products</button>
        </div>
      </div>
      <div className="product-grid">
        {fashionProducts.map((fashion, index) => (
          <div key={index} className="product-card">
            <img className="product-image" src={fashion.Image} alt={fashion.name} />
            <div className="product-details">
              <h2>{fashion.Name}</h2>
              <p className="description">{fashion.Description}</p>
              <p className="price">Price: ₹{fashion.Price}</p>
              <p className="colour">Colour: {fashion.Colour}</p>
              <button
                onClick={() => cartData(fashion)}
                className="buy-btn"
                disabled={cart.some((item) => item.Name === fashion.Name)}
              >
                {cart.some((item) => item.Name === fashion.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => toggleLike(fashion)}
                className="like-btn"
              >
                {likedProducts.some((item) => item.Name === fashion.Name) ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionData;



