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

    function toLaptops(){
        navigate('/laptopdata')
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
                    <div className="item Electronics-item" onClick={toLaptops}>
                    <img
                        className="home-img Electronics-img"
                        src="data:image/jpeg;base64,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"
                        alt="Electronics"
                    />
                    <h3>Laptops</h3>
                </div>
                
            </div>
        </div>
    );
}

export default Home;
