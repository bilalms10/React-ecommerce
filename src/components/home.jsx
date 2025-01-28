import { useNavigate } from "react-router-dom";
import './home.css';

function Home() {
    const navigate = useNavigate();

    function toMobiles() {
        navigate('/mobilesdata');
    }

    function toShoes(){
        navigate('/shoesdata')
    }
    function toFashion(){
        navigate('/fashiondata')
    }


    return (
       <div>
        <div className="logo">
<img className="logopic" src="https://files.oaiusercontent.com/file-9Vk6GN8kzx3sjxGQGrEojK?se=2025-01-22T02%3A53%3A25Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1c0ed9f8-3c6b-4c6b-88e2-3d8cbd5fc185.webp&sig=NIXEIdznPPBURdhBlFtMdEeIBtXOFykXE6T6Bo1qRKk%3D" alt="logo" />
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
            <div className="item">
                <img 
                    className="homepic" 
                    onClick={toFashion}
                    src="https://img.freepik.com/premium-photo/young-man-choosing-cloths-menswear-shop_926199-2186144.jpg?ga=GA1.1.906888177.1737035401&semt=ais_incoming" 
                    alt="fashion" 
                />
                <h3>Fashion</h3>
            </div>
            <div className="item">
                <img 
                    className="homepic" 
                    onClick={toShoes}
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