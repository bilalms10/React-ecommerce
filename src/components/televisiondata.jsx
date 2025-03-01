import { useContext } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css";
import { useNavigate } from "react-router-dom";

function TelevisionData() {
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const televisionProducts = productData.filter((product) => product.Type === "Television");

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
    <div className="productdata-data-container Television">
      <h1>Televisions</h1>
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
    <option className="navbtns" value="/laptopdata">Laptops</option>
    <option className="navbtns"value="/watchdata">Watch</option>
    <option className="navbtns" value="/mobilesdata">Mobiles</option>
  </select>
</div>
          <button className="navbtns" onClick={() => navigateTo("/cart")}>View Cart</button>
          <button className="navbtns" onClick={() => navigateTo("/likedProducts")}>Liked Products</button>
        </div>
      </div>
      <div className="tv-product-grid">
        {televisionProducts.map((television, index) => (
          <div key={index} className="product-card">
            <img className="tv-product-image" src={television.Image} alt={television.name} />
            <div className="product-details">
              <h2>{television.Name}</h2>
              <p className="description">{television.Description}</p>
              <p className="price">Price: ₹{television.Price}</p>
              <p className="colour">Colour: {television.Colour}</p>
              <button
                onClick={() => cartData(television)}
                className="buy-btn"
                disabled={cart.some((item) => item.Name === television.Name)}
              >
                {cart.some((item) => item.Name === television.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => toggleLike(television)}
                className="like-btn"
              >
                {likedProducts.some((item) => item.Name === television.Name) ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelevisionData;