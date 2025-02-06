import './home.css'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function toMobiles() {
        navigate('/mobilesdata');
    }

    function toShoes() {
        navigate('/shoesdata');
    }

    function toFashion() {
        navigate('/fashiondata');
    }

    function toCart() {
        navigate('/cart');
    }

    function toLiked() {
        navigate('/likedProducts');
    }

    function logout() {
        navigate("/");
    }

    return (
        <div className="home-container">
            <div className="navbar">
                <h3 className="logo">NEXTBUY</h3>
                <div className="nav-buttons">
                    <button className="nav-btn cart-btn" onClick={toCart}>Cart</button>
                    <button className="nav-btn liked-btn" onClick={toLiked}>Liked</button>
                    <button className="nav-btn logout-btn" onClick={logout}>Logout</button>
                </div>
            </div>

            <div className="content">
                <div className="item mobiles-item" onClick={toMobiles}>
                    <img
                        className="home-img mobiles-img"
                        src="https://3.imimg.com/data3/SR/GR/MY-11441521/mobile-phones.jpeg"
                        alt="mobiles"
                    />
                    <h3>Mobiles</h3>
                </div>

                <div className="item fashion-item" onClick={toFashion}>
                    <img
                        className="home-img fashion-img"
                        src="https://img.freepik.com/premium-photo/young-man-choosing-cloths-menswear-shop_926199-2186144.jpg"
                        alt="fashion"
                    />
                    <h3>Fashion</h3>
                </div>

                <div className="item shoes-item" onClick={toShoes}>
                    <img
                        className="home-img shoes-img"
                        src="https://media.gq.com/photos/60d21a25ab6b8cc6e9d2c80a/16:9/w_1280,c_limit/SNEAKER_GUIDE_OPENER.jpg"
                        alt="shoes"
                    />
                    <h3>Shoes</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
