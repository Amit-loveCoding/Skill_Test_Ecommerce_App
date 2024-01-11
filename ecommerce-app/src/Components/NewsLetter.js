import React, { useState } from "react";
import "../Styles/NewsLetter.css";
import { useNavigate } from "react-router-dom";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const subscribe = () => {
    const data = { email };
    // console.log("User Email:", data);

    // Store user details in local storage
    localStorage.setItem("data", JSON.stringify(data));

    // Reset the form
    setEmail("");

    // Navigate to another page
    navigate("/");

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
    alert("Hurray!!!You have successfully subscribed😍😍");
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay yourself updated</p>
      <div>
        <input
          type="email"
          placeholder="Your Email id"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={subscribe}>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
