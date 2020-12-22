import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import "./About.css";

export default function Where() {
  return (
    <div className="team-container">
      <h1 className="team">
        We are a 100% Remote Company! Find us on social media!
      </h1>
      <div className="social-media">
        <a
          href="https://www.facebook.com/"
          className="facebook"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#438d40" }}
        >
          <AiFillFacebook size="50px" />
        </a>
        <a
          href="https://www.youtube.com/"
          className="youtube"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#438d40" }}
        >
          <AiFillYoutube size="50px" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="instagram"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#438d40" }}
        >
          <AiFillInstagram size="50px" />
        </a>
        <a
          href="https://www.pinterest.pt/"
          className="pinterest"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#438d40" }}
        >
          <FaPinterestSquare size="50px" />
        </a>
      </div>
    </div>
  );
}
