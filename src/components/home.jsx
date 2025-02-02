import { useNavigate } from "react-router-dom";
import './home.css';

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
    function logout(){
        navigate("/")
    }

    return (
        <div>

            <div className="Navbar">
                <h3> NEXTBUY </h3>
                <div className="navbtns">
                    <button className="navbtn" onClick={toCart}>Cart</button>
                    <button className="navbtn" onClick={toLiked}>Liked</button>
                    <button className="navbtn" onClick={logout}>logout</button>
                </div>
            </div>
            <div className="contentdiv">
                <div className="item" onClick={toMobiles}>
                    <img
                        className="homepic"
                        src="https://3.imimg.com/data3/SR/GR/MY-11441521/mobile-phones.jpeg"
                        alt="mobiles"
                    />
                    <h3>Mobiles</h3>
                </div>

                <div className="item" onClick={toFashion}>
                    <img
                        className="homepic"
                        src="https://img.freepik.com/premium-photo/young-man-choosing-cloths-menswear-shop_926199-2186144.jpg"
                        alt="fashion"
                    />
                    <h3>Fashion</h3>
                </div>

                <div className="item" onClick={toShoes}>
                    <img
                        className="homepic"
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
