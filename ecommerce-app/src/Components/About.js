import React from "react";
import { FaShopify } from "react-icons/fa";

function About() {
  return (
    <div
      className="about-container"
      style={{
        fontFamily: "sans-serif",
        fontSize: "20px",
        margin: "auto",
        height: "500px",
        width: "700",
        marginTop: "110px",
        background: "linear-gradient(to right, #ddd6f3, #faaca8)",
        padding: "50px 50px",
        animation: "emergeOut 1s ease-out",
      }}
    >
      <p
        style={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "100px",
          animation: "emergeOut 1s ease-out",
        }}
      >
        "<FaShopify /> $HOPIFY is your premier online shopping destination,
        offering a diverse array of high-quality products curated for your every
        need. From the latest fashion trends to cutting-edge electronics, we
        bring you a seamless and secure shopping experience. Our commitment to
        customer satisfaction is evident in our user-friendly platform,
        attentive customer service, and a mission to simplify and enhance your
        online shopping journey. At <FaShopify /> $HOPIFY, we prioritize your
        trust, delivering a unique blend of variety, reliability, and
        convenience. Welcome to a world of endless possibilities, where your
        satisfaction is our top priority. Happy shopping with <FaShopify />{" "}
        $HOPIFY!"
      </p>
    </div>
  );
}

export default About;
