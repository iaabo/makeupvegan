import React from "react";
import "./About.css";

const handleSend = (event) => {
  event.preventDefault();
  alert(
    "Thank you for being part of the Vegan Community! We will answer you as soon as possible."
  );
};
const Contact = () => {
  return (
    <div className="team-container">
      <h1 className="team">We'd ♥ hearing from you. Drop us a message!</h1>
      <form className="form-wrapper" onSubmit={handleSend}>
        <div className="input-fields">
          <input
            type="text"
            className="input"
            required="required"
            placeholder="Name"
          />
          <input
            type="text"
            className="input"
            placeholder="Email"
            required="required"
          />
          <input
            type="text"
            className="input"
            placeholder="Phone"
            required="required"
          />
          <input
            type="text"
            className="input"
            placeholder="Subject"
            required="required"
          />
        </div>
        <div className="msg">
          <textarea placeholder="message"></textarea>
          <button type="submit" className="btn">
            Send it!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
