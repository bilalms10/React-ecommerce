import { useContext } from "react";
import { myContext } from "./contextpage";
import { useNavigate } from "react-router-dom";

function LikedProducts() {
    const { liked, SetLiked } = useContext(myContext)
    const navigate = useNavigate()

    const removeFromLiked = (product) => {
        SetLiked(liked.filter((item) => item.Name !== product.Name));
    };

    function toHome() {
        navigate("/home")
    }
    function toFashion() {
        navigate("/fashiondata")
    }
    function toMobiles() {
        navigate("/mobiledata")
    }
    function toShoes() {
        navigate("/shoesdata")
    }

    return
    (
        <div className="liked-container">
            <h1>Liked Products</h1>

            <div className="liked-data-container">

                <button className="navbtns" onClick={toHome}>Home</button>
                <button className="navbtns" onClick={toFashion}>Fashions</button>
                <button className="navbtns" onClick={toShoes}>Shoes</button>
                <button className="navbtns" onClick={toMobiles}>Mobiles</button>
            </div>


            <div className="like-grid">
                {liked.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div className="cart-image">{item.Image}</div>
                        <div className="cart-details">
                            <h2>{item.Name}</h2>
                            <p>{item.Description}</p>
                            <p>Price: ₹{item.Price}</p>


                            <button
                                onClick={() => removeFromLiked(item)}
                                className="remove-btn"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default LikedProducts;