import React from "react";
import "../Styles/Footer.css";
import { FaShopify } from "react-icons/fa";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import { Link } from "react-router-dom";

// Import WhatsAppLink component
import WhatsAppLink from "../Components/WhatsappLink"; // Adjust the path accordingly

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const googleMapsAddress =
    "https://www.google.com/maps/place/Connaught+Place,+New+Delhi,+Delhi+110001/@28.628902,77.2152869,15z/data=!3m1!4b1!4m6!3m5!1s0x390cfd37b741d057:0xcdee88e47393c3f1!8m2!3d28.6304203!4d77.2177216!16zL20vMDR4eDB4?entry=ttu";
  return (
    <div className="footer">
      <div className="footer-logo">
        <FaShopify className="shop-icon" />
        <Link to={"/"} className="custom-link">
          <p>$HOPIFY</p>
        </Link>
      </div>
      <ul className="footer-links">
        <Link
          to={"/company"}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <li>Company</li>
        </Link>
        <Link
          to={"/cart"}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <li>Products</li>
        </Link>
        <li>
          {/* Use an anchor tag for the Google Maps link */}
          <a
            href={googleMapsAddress}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            Offices
          </a>
        </li>
        <Link
          to={"/about"}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <li>About</li>
        </Link>
        <Link
          to={"/contact"}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          {/* Call the WhatsAppLink component here */}
          <WhatsAppLink />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @{currentYear} - All Right Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
