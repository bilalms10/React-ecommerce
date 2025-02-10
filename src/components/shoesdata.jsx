import { useContext } from "react";
import { useState } from "react";
import { myContext } from "./contextpage";
import "./productdatas.css"
import { useNavigate } from "react-router-dom";

function ShoesData (){
  const { productData, likedProducts, setLikedProducts, cart, setCart } = useContext(myContext);
    const [addedProducts, setAddedProducts] = useState([]); 
    const [likedItems, setLikedItems] = useState([]); 
    const navigate = useNavigate()


    function cartData(product) {
      if (!cart.some((item) => item.Name === product.Name)) {
        setCart([...cart, product]);
        setAddedProducts([...addedProducts, product.Name]); 
      }
    }
    const shoeProducts = productData.filter((product) => product.Type === "Shoes");

    function likeProduct(product) {
      if (!likedItems.includes(product.Name)) {
        setLikedItems([...likedItems, product.Name]);
        setLikedProducts([...likedProducts, product]); 
      }
    }


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
   function toLiked(){
    navigate("/likedProducts")
   }
 
 
     return (
         <div className="productdata-data-container">
             <h1>Shoes</h1>
             <div className="fullnav">
             <div className="navtxt"> <h3>NEXTBUY</h3> </div>
             <div className="navigate-btns">
       <button className="navbtns" onClick={toHome}>Home</button>
       <button className="navbtns" onClick={toFashion}>Fashions</button>
       <button className="navbtns" onClick={toMobiles}>Mobiles</button>
       <button className="navbtns" onClick={toCart}>View Cart</button>
       <button className="navbtns" onClick={toLiked}>Liked Products</button>
       </div>
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
                disabled={addedProducts.includes(shoes.Name)}
              >
                {addedProducts.includes(shoes.Name) ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => likeProduct(shoes)}
                className="like-btn"
                disabled={likedItems.includes(shoes.Name)}
              >
                {likedItems.includes(shoes.Name) ? "Liked" : "Like"}
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
export default ShoesData;