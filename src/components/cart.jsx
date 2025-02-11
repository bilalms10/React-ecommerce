import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { myContext } from "./contextpage";

function Cart() {
  const { cart, setCart } = useContext(myContext);
  const [purchased, setPurchased] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = (e, product) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setCart(
        cart.map((item) =>
          item.Name === product.Name ? { ...item, quantity: value } : item
        )
      );
    }
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.Price * (product.quantity || 1),
    0
  );

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.Name !== product.Name));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>

      <div className="cart-navigation">
        <button className="cart-navbtn" onClick={() => navigate("/home")}>Home</button>
        <button className="cart-navbtn" onClick={() => navigate("/fashiondata")}>Fashion</button>
        <button className="cart-navbtn" onClick={() => navigate("/shoesdata")}>Shoes</button>
        <button className="cart-navbtn" onClick={() => navigate("/mobilesdata")}>Mobiles</button>
      </div>

      <div className="cart-summary">
        <h5 className="cart-total">Total Price: ₹{totalPrice}</h5>
        <button className="cart-purchase-btn" onClick={() => setPurchased(true)}>
          {purchased ? "Purchased" : "Purchase"}
        </button>
      </div>

      <div className="cart-grid">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-image">{item.Image}</div>
            <div className="cart-details">
              <h2 className="cart-item-name">{item.Name}</h2>
              <p className="cart-item-description">{item.Description}</p>
              <p className="cart-item-price">Price: ₹{item.Price}</p>

              <div className="cart-quantity-container">
                <label htmlFor={`quantity-${index}`} className="cart-quantity-label">Quantity:</label>
                <input
                  id={`quantity-${index}`}
                  className="cart-quantity-input"
                  type="number"
                  value={item.quantity || 1}
                  min="1"
                  onChange={(e) => handleQuantityChange(e, item)}
                />
              </div>

              <p className="cart-item-total">Item Total: ₹{item.Price * (item.quantity || 1)}</p>

              <button className="cart-remove-btn" onClick={() => removeFromCart(item)}>
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




