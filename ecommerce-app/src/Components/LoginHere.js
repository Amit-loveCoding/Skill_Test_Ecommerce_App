import React, { useState } from "react";
import "../Styles/LoginHere.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginHere = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    alert("You have signed in successfully...");

    // Display the details filled by the user
    const signInDetails = {
      email,
      password,
    };

    // Store user details in local storage
    localStorage.setItem("signInDetails", JSON.stringify(signInDetails));

    // Reset the form or navigate to another page
    navigate("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign In</h1>
        <div className="loginsignup-fields">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />

        <Link to={"/login/loginHere/password"} className="password-link">
          <p>Forgot passwword ?</p>
        </Link>
        <button onClick={handleButtonClick}>Sign In</button>
      </div>
    </div>
  );
};

export default LoginHere;
