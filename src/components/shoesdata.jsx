import { useContext } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css"
import { useNavigate } from "react-router-dom";

function ShoesData (){
    const { Products, cart,setCart } = useContext(myContext)
    const navigate = useNavigate()


    function cartData(product) {
      if (!cart.some((item) => item.Name === product.Name)) {
        setCart([...cart, product]);
      }
    }
    const shoeProducts = Products.filter((Products)=>Products.Type == "Shoes")

  
function toCart(){
navigate("/cart")
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
 
 
     return (
         <div className="productdata-data-container">
             <h1>Shoes</h1>
             <div className="navigate-btns">
       <button className="navbtns" onClick={toHome}>Home</button>
       <button className="navbtns" onClick={toFashion}>Fashions</button>
       <button className="navbtns" onClick={toMobiles}>Mobiles</button>
       <button className="navbtns" onClick={toCart}>View Cart</button>
       
       </div>
        <div className="product-grid">
          {shoeProducts.map((shoes, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{shoes.Image}</div>
              <div className="product-details">
                <h2>{shoes.Name}</h2>
                <p className="description">{shoes.Description}</p>
                <p className="price">Price: ₹{shoes.Price}</p>
                <p className="colour">Colour: {shoes.Colour}</p>
                <button
                onClick={() => cartData(shoes)}
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
export default ShoesData;