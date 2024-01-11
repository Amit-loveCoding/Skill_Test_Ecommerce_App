import React, { useState } from "react";
import "../Styles/LoginSignUp.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleButtonClick = () => {
    alert("You have signed up successfully...");

    setSignupSuccess(true);

    // Display the details filled by the user
    const signUpDetails = {
      userName,
      email,
      password,
    };

    // Store user details in local storage
    localStorage.setItem("signUpDetails", JSON.stringify(signUpDetails));

    // Reset the form or navigate to another page
    navigate("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: signupSuccess ? "green" : "blue",
            color: "white",
          }}
        >
          {signupSuccess ? "Signed Up!" : "Continue"}
        </button>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <Link
            to={"/login/loginHere"}
            style={{
              textDecoration: "none",
            }}
          >
            <span>Login Here</span>
          </Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
