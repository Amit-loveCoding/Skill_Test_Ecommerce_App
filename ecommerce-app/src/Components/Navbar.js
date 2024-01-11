import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  // console.log(`lengthItems`, lengthItems);
  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          <Link to={`/`} className="shopify-link">
            <FaShopify className="shop-icon" />
            $HOPIFY
          </Link>

          <Link to={`/addProduct`} className="shopify-link">
            <span className="mx-5 text-white" style={{ fontSize: "20px" }}>
              ADD A PRODUCT <FaPlusCircle className="symbol-add" />
            </span>
          </Link>
          <Link
            to={`/help`}
            style={{ fontSize: "20px", textDecoration: "none", color: "white" }}
            className="help-link"
          >
            Help
            <MdLiveHelp className="symbol-help" />
          </Link>
        </span>
        <Link to={"/Login"} className="login-link">
          <span className="login">account</span>
        </Link>

        <div className="cart">
          <Link to={`/Cart`} style={{ textDecoration: "none" }}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
