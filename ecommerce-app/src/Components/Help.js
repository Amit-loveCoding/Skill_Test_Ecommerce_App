import React, { useState } from "react";
import "../Styles/Help.css";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleButtonClick = () => {
    alert(
      "Before you share the feedback makesure you carefully filled up the details otherwise we won't be reached out...🤔🤔"
    );
    alert("Thanks for the feedback!!! Have a good day!!! Sir/madam...💗😍💗");

    // Display the details filled by the user
    const userDetails = {
      firstName,
      lastName,
      phone,
      email,
      feedback,
    };

    // console.log("User Details:", userDetails);

    // Store user details in local storage

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Reset the form or navigate to another page
    navigate("/");
  };

  return (
    <div className="editContainer">
      <div className="feedContainer">
        <h1>CUSTOMER FEEDBACK FORM </h1>

        <div className="customer-detail">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="feedback-desription"
            type="text"
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>

        <input className="screenshot" type="file" required />

        <div className="submit">
          <button onClick={handleButtonClick}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Help;
