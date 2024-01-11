import React from "react";
import { Link } from "react-router-dom";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const WhatsAppLink = () => {
  const phoneNumber = "9650596218"; // Replace with your actual phone number
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdkWAQ4Dcz9hB2IFoR6cVv47bxGTXt9OwN1EYX40zuVf21Blw/viewform?vc=0&c=0&w=1&flr=0"; // Replace with your Google Form URL

  const handleWhatsAppClick = () => {
    const whatsappMessage = `Check out this Google Form: ${googleFormUrl}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.location.href = whatsappUrl;
  };

  return (
    <Link to="#" onClick={handleWhatsAppClick}>
      <img src={whatsapp_icon} alt="WhatsApp" />
    </Link>
  );
};

export default WhatsAppLink;
