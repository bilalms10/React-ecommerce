import { useContext } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css"
import { useNavigate } from "react-router-dom";

function FashionData() {
    const { Products,liked,setLiked, cart,setCart } = useContext(myContext)
    const navigate = useNavigate();

    const fashionProducts = Products.filter((Products) => Products.Type == "Fashion")

    function cartData(product) {
        if (!cart.some((item) => item.Name === product.Name)) {
          setCart([...cart, product]);
        }
      }
 function toCart(){
    navigate('/cart')
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


    return (
        <div className="productdata-data-container">
            <h1>Fashion Products</h1>
            <div className="navigate-btns">
      <button className="navbtns" onClick={toHome}>Home</button>
      <button className="navbtns" onClick={toMobiles}>Mobiles</button>
      <button className="navbtns" onClick={toShoes}>Shoes</button>
      <button className="navbtns" onClick={toCart}>View Cart</button>
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
              >
                Add to Cart
              </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default FashionData;