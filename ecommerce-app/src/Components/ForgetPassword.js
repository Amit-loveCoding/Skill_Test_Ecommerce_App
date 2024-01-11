import React, { useState } from "react";
import "../Styles/ForgetPassword.css";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    alert("A link has been sent to your email for resetting the password...");

    // Display the details filled by the user
    const details = {
      email,
    };

    // Store user details in local storage
    localStorage.setItem("details", JSON.stringify(details));

    // Reset the form or navigate to another page
    navigate("/login/loginHere");
  };

  return (
    <div className="forgetpassword">
      <div className="forgetpassword-container">
        <h1>Enter Your Email</h1>
        <div className="forgetpassword-fields">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button onClick={handleButtonClick}>Submit</button>
      </div>
    </div>
  );
};

export default ForgetPassword;
