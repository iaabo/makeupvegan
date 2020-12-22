import React from "react";
import { Link } from "react-router-dom";
import vegan from "./vegan.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="fix">
        <video autoPlay loop muted className="vid-bg">
          <source src={vegan} type="video/mp4" />
        </video>
        <div className="banner-text">
          <div className="banner-message">
            <h1 className="banner-title">
              <span>Beauty</span> without the Beast
            </h1>
            <p className="banner-subtile">
              The latest <span>vegan makeup</span>, 100% cruelty free! Being
              naturally beautiful.
            </p>
          </div>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/products"
            className="button-banner"
          >
            Explore
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
