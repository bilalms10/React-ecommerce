import "./cart.css"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { myContext } from "./contextpage";

function Cart() {
  const { cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

 
  const handleQuantityChange = (e, product) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      product.quantity = value; 
      setCart([...cart]);
    }
  };
const totalPrice = cart.reduce(
    (total, product) => total + product.Price * (product.quantity || 1),
    0
  );

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.Name !== product.Name));
  };

  function toHome() {
    navigate("/home");
  }
  function toFashion() {
    navigate("/fashiondata");
  }
  function toShoes() {
    navigate("/shoesdatas");
  }
  function toMobiles() {
    navigate("/mobilesdata");
  }

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      
      <div className="productdata-data-container">
      <button onClick={toHome}>Home</button>
       <button onClick={toFashion}>Fashions</button>
       <button onClick={toShoes}>Shoes</button>
       <button onClick={toMobiles}>Mobiles</button>
       </div>
      <h5>Total Price: ₹{totalPrice}</h5>
      
        <div className="cart-grid">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-image">{item.Image}</div>
              <div className="cart-details">
                <h2>{item.Name}</h2>
                <p>{item.Description}</p>
                <p>Price: ₹{item.Price}</p>
                <div>
                  <label htmlFor={`quantity-${index}`}>Quantity:</label>
                  <input
                    id={`quantity-${index}`}
                    style={{ width: "50px", marginLeft: "5px" }}
                    type="number"
                    value={item.quantity || 1}
                    min="1"
                    onChange={(e) => handleQuantityChange(e, item)}
                  />
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
}

export default Cart;

