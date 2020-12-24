import React from "react";
import { Link } from "react-router-dom";
/* import vegan from "./vegan.mp4"; */
import vegan1 from "./vegan1.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="fix">
        <img src={vegan1} alt="vegan" className="vid-bg" />
        {/*  <video autoPlay loop muted className="vid-bg">
          <source src={vegan} type="video/mp4" />
        </video> */}
        <div className="banner-text">
          <div className="banner-message">
            <h1 className="banner-title">
              <span>Beauty</span> without the Beast
            </h1>
            <p className="banner-subtile">
              Search the latest vegan makeup products in our library and add to
              your favourites.
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
