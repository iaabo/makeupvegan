import React from "react";
import "./About.css";
import Laura from "../../assets/Laura.jpg";
import Sofia from "../../assets/Sofia.jpg";
import Anabela from "../../assets/Anabela.jpg";
import Denise from "../../assets/Denise.jpg";

const Who = () => {
  return (
    <div className="team-container">
      <h1 className="team">Meet the team</h1>
      <div className="container">
        <div className="row">
          <div className="product">
            <div className="picture">
              <img src={Laura} alt="" className="img-fluid" />
            </div>
            <div className="product-content">
              <h3 className="product-type">Laura F.</h3>
              <h3 className="product-price">The Vegan CEO</h3>
              <h4 className="product-rating">Vegan + Dog Owner</h4>
            </div>
            <div className="product-button">
              <a
                href="https://www.linkedin.com/in/inesbarroso/"
                className="btn-product"
                style={{ textDecoration: "none", color: "white" }}
              >
                Follow
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="product">
            <div className="picture">
              <img src={Anabela} alt="" className="img-fluid" />
            </div>
            <div className="product-content">
              <h3 className="product-type">Anabela M.</h3>
              <h3 className="product-price">The Vegan Designer</h3>
              <h4 className="product-rating">Vegan + Runner</h4>
            </div>
            <div className="product-button">
              <a
                href="https://www.linkedin.com/in/inesbarroso/"
                className="btn-product"
                style={{ textDecoration: "none", color: "white" }}
              >
                Follow{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="product">
            <div className="picture">
              <img src={Denise} alt="" className="img-fluid" />
            </div>
            <div className="product-content">
              <h3 className="product-type">Denise A.</h3>
              <h3 className="product-price">The Vegan Key Account</h3>
              <h4 className="product-rating">Vegan + Fashion Advisor</h4>
            </div>
            <div className="product-button">
              <a
                href="https://www.linkedin.com/in/inesbarroso/"
                className="btn-product"
                style={{ textDecoration: "none", color: "white" }}
              >
                Follow{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="product">
            <div className="picture">
              <img src={Sofia} alt="" className="img-fluid" />
            </div>
            <div className="product-content">
              <h3 className="product-type">Sofia D.</h3>
              <h3 className="product-price">The Vegan Developer</h3>
              <h4 className="product-rating">Vegan + Tattoo Artist </h4>
            </div>
            <div className="product-button">
              <a
                href="https://www.linkedin.com/in/inesbarroso/"
                className="btn-product"
                style={{ textDecoration: "none", color: "white" }}
              >
                Follow{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
