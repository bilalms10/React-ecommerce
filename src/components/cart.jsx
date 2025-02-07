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
    <div className="cart-page-container">
      <h1 className="cart-header">Cart</h1>

      <div className="cart-navigation">
        <button className="cart-nav-button" onClick={() => navigate("/home")}>Home</button>
        <button className="cart-nav-button" onClick={() => navigate("/fashiondata")}>Fashions</button>
        <button className="cart-nav-button" onClick={() => navigate("/shoesdatas")}>Shoes</button>
        <button className="cart-nav-button" onClick={() => navigate("/mobilesdata")}>Mobiles</button>
      </div>

      <div className="cart-purchase-section">
        <h5 className="cart-total-price">Total Price: ₹{totalPrice}</h5>
        <button className="cart-purchase-button" onClick={() => setPurchased(true)}>
          {purchased ? "Purchased" : "Purchase"}
        </button>
      </div>

      <div className="cart-items-container">
        {cart.map((item, index) => (
          <div key={index} className="cart-item-box">
            <div className="cart-item-image-container">
              <img src={item.Image} alt={item.Name} className="cart-item-image"/>
            </div>
            <div className="cart-item-details">
              <h2 className="cart-item-title">{item.Name}</h2>
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

              <p className="cart-item-total-price"><strong>Item Total:</strong> ₹{item.Price * (item.quantity || 1)}</p>

              <button onClick={() => removeFromCart(item)} className="cart-remove-button">
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
