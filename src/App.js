import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import { myContext } from "./components/contextpage";
import { useState } from "react";
import FashionData from "./components/fashiondata";
import ShoesData from "./components/shoesdata";
import MobilesData from "./components/mobilesdata";
import { Products } from "./components/products";
import Cart from "./components/cart";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [liked, setLiked] = useState([]);
  const [productData, setProductData] = useState(Products);
  const [cart, setCart] = useState([]);

  return (
 <BrowserRouter>
      <myContext.Provider
        value={{
          userDetails,
          setUserDetails,
          Products,
          liked,
          setLiked,
          productData,
          setProductData,
          cart,
          setCart,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mobilesdata" element={<MobilesData />} />
          <Route path="/fashiondata" element={<FashionData />} />
          <Route path="/shoesdata" element={<ShoesData />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
