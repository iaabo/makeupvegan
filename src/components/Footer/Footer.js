import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        {" "}
        All the makeup information comes from{" "}
        <a
          href="https://makeup-api.herokuapp.com/"
          style={{ textDecoration: "none", color: "green" }}
        >
          {" "}
          Makeup API.{" "}
        </a>{" "}
      </p>
      <p>
        Design and code by{" "}
        <a
          href="https://www.linkedin.com/in/inesbarroso/"
          style={{ textDecoration: "none", color: "green" }}
        >
          Inês Barroso
        </a>
      </p>

      {/*     <h3 className="copyrights-text"> © Copyrights reserved 2020</h3> */}
    </div>
  );
}

export default Footer;
