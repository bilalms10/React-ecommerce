import { useContext } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css";
import { useNavigate } from "react-router-dom";

function LaptopData() {
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const laptopProducts = productData.filter((product) => product.Type === "Laptop");

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
      <h1>Laptops</h1>
      <div className="fullnav">
        <div className="navtxt">
          <h3>NEXTBUY</h3>
        </div>
        <div className="navigate-btns">
          <button className="navbtns" onClick={() => navigateTo("/home")}>Home</button>
          <div className="product-dropdown">
  <select className="nav-dropdown" onChange={(e) => navigate(e.target.value)}>
    <option className="navbtns" value="" disabled selected>Select a Category</option>
    <option className="navbtns" value="/fashiondata">Fashion</option>
    <option className="navbtns" value="/shoesdata">Shoes</option>
    <option className="navbtns" value="/mobilesdata">Mobiles</option>
    <option className="navbtns"value="/watchdata">Watch</option>
    <option className="navbtns" value="/televisiondata">Television</option>
  </select>
</div>
          <button className="navbtns" onClick={() => navigateTo("/cart")}>View Cart</button>
          <button className="navbtns" onClick={() => navigateTo("/likedProducts")}>Liked Products</button>
        </div>
      </div>
      <div className="laptop-product-grid">
        {laptopProducts.map((laptop, index) => (
          <div key={index} className="product-card">
            <img className="lap-product-image" src={laptop.Image} alt={laptop.name} />
            <div className="product-details">
              <h2>{laptop.Name}</h2>
              <p className="description">{laptop.Description}</p>
              <p className="price">Price: ₹{laptop.Price}</p>
              <p className="colour">Colour: {laptop.Colour}</p>
              <button
                onClick={() => cartData(laptop)}
                className="buy-btn"
                disabled={cart.some((item) => item.Name === laptop.Name)}
              >
                {cart.some((item) => item.Name === laptop.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => toggleLike(laptop)}
                className="like-btn"
              >
                {likedProducts.some((item) => item.Name === laptop.Name) ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaptopData;