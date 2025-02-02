import "./cart.css"
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

      <div className="cart-data-container">
        <button className="navbtns" onClick={toHome}>Home</button>
        <button className="navbtns" onClick={toFashion}>Fashions</button>
        <button className="navbtns" onClick={toShoes}>Shoes</button>
        <button className="navbtns" onClick={toMobiles}>Mobiles</button>
      </div>
      <div className="buy" style={{paddingRight:"50px", display: "flex", backgroundColor:"lightgreen", gap:"10px", padding:"10px", alignItems:"center"}}>
      <h5>Total Price: ₹{totalPrice}</h5>
      <button onClick={() => setPurchased(true)}>
      {purchased ? "Purchased" : "Purchase"}
      
    </button>
    </div>

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
                  style={{ width: "60px", marginLeft: "5px" }}
                  type="number"
                  value={item.quantity || 1}
                  min="1"
                  onChange={(e) => handleQuantityChange(e, item)}
                />
              </div>
              
              <p><strong>Item Total:</strong> ₹{item.Price * (item.quantity || 1)}</p>

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


