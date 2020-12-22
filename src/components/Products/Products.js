import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="product">
          <div className="picture">
            <img src={props.image_link} alt="" className="img-fluid" />
          </div>
          <div className="product-content">
            <h3 className="product-type"> {props.product_type}</h3>{" "}
            <h4 className="product-price">
              Price: $ {props.price !== "0.0" ? props.price : "not available"}
            </h4>
            <h4 className="product-rating">
              Rating: {props.rating ? props.rating : "-"}{" "}
            </h4>
          </div>
          <div className="product-button">
            {" "}
            <Link
              to={`/product/${props.id}`}
              style={{ textDecoration: "none", color: "white" }}
              className="btn-product"
            >
              {" "}
              View details
            </Link>
          </div>
          <div className="product-over"></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
