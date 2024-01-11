import React, { useState } from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { toast } from "react-toastify";
import ToastNotification from "./Components/ToastNotification";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import { addcartItem } from "./Redux/CartSlice";
import { useDispatch } from "react-redux";
import ProductDetails from "./Components/Pdp";
import Footer from "./Components/Footer";
import Help from "./Components/Help";
import LoginSignup from "./Components/LoginSignup";
import LoginHere from "./Components/LoginHere";
import About from "./Components/About";
import Company from "./Components/Company";
import Contact from "./Components/Contact";

const App = () => {
  const [cart, setCart] = useState([]);
  const [productDetailspage, setProductDetailspage] = useState();
  const dispatch = useDispatch();

  const handleClick = (e, item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    try {
      dispatch(addcartItem(item));
      toast.success(`Added to Cart`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handlePdp = (e, item) => {
    console.log(`item of pdp`, item);
    setProductDetailspage(item);
  };
  console.log(`productDetailspage`, productDetailspage);

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Main handleClick={handleClick} handlePdp={handlePdp} />}
            ></Route>

            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              }
            ></Route>

            <Route exact path="/addProduct" element={<AddProduct />}></Route>
            <Route
              exact
              path="/productDetails"
              element={
                <ProductDetails
                  handleClick={handleClick}
                  productDetailspage={productDetailspage}
                />
              }
            ></Route>
            <Route exact path="/help" element={<Help />} />
            <Route path="/login" element={<LoginSignup />}></Route>
            <Route path="/login/loginHere" element={<LoginHere />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <ToastNotification />
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
