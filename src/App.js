import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import { myContext } from "./components/contextpage";
import { useState } from "react";
import FashionData from "./components/fashiondata";
import ShoesData from "./components/shoesdata";
import MobilesData from "./components/mobilesdata";
import LaptopData from "./components/laptopdata";
import WatchData from "./components/watchdata";
import TelevisionData from "./components/televisiondata";
import { Products } from "./components/products1";
import Cart from "./components/cart";
import LikedProducts from "./components/likedProducts";
import AdminPage from "./components/adminpage";
import Users from "./components/users";
import EditProducts from "./components/editProducts";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginLogs, setLoginLogs] = useState([]);
  const [liked, setLiked] = useState(Products);
  const [productData, setProductData] = useState(Products);
  const [cart, setCart] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  return (
    <BrowserRouter>
      <myContext.Provider
        value={{
          userDetails,
          setUserDetails,
          loggedInUser,
          setLoggedInUser,
          Products,
          liked,
          setLiked,
          productData,
          setProductData,
          cart,
          setCart,
          likedProducts,
          setLikedProducts,
          loginLogs,
          setLoginLogs,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mobilesdata" element={<MobilesData />} />
          <Route path="/fashiondata" element={<FashionData />} />
          <Route path="/shoesdata" element={<ShoesData />} />
          <Route path="/laptopdata" element={<LaptopData />} />
          <Route path="/watchdata" element={<WatchData/>} />
          <Route path="/televisiondata" element={<TelevisionData/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/likedProducts" element={<LikedProducts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/editProducts" element={<EditProducts />} />
        </Routes>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;