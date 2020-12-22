import React from "react";
import "./Feed.css";

function Feed(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="product">
            <div className="picture">
              <img
                className="img-fluid"
                src={props.image}
                alt="Pic not found"
              />

              <div className="product-content">
                <p className="product-rating"> "{props.comment}"</p>
                <p className="product-rating">
                  {" "}
                  Overall Experience: {props.rating !== "" ? props.rating : "-"}
                  /10{" "}
                </p>
                <h4 className="product-rating">
                  {props.name}, {props.location}
                </h4>
                <div className="status">
                  {props.online ? "Online" : "Offline"}
                  {"   "}
                  <div
                    className={
                      props.online ? "status-online" : "status-offline"
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
