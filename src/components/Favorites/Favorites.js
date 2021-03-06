import React from "react";
import NavBar from "./../NavBar/NavBar";
import Products from "./../Products/Products";
import { Link } from "react-router-dom";
import "./../Products/ProductList.css";
import { FavouritesContext } from "../../contexts/FavouritesContext";
import Footer from "../Footer/Footer";

class Favorites extends React.Component {
  static contextType = FavouritesContext;
  render() {
    const { favouriteProducts } = this.context;

    return (
      <div>
        <NavBar />
        <div className="img-container-favorites">
          <div className="background-container-favorites">
            <h1 className="header-message-favorites">
              {" "}
              My Favorite Vegan Makeup Products ♥
            </h1>
          </div>
        </div>
        <button className="button-return">
          {" "}
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
            className="button-return-text"
          >
            Return to search
          </Link>
        </button>
        <div>
          {favouriteProducts.length > 0 ? (
            <div className="container">
              {favouriteProducts.map((product) => (
                <Products {...product} />
              ))}
            </div>
          ) : (
            <div>
              <h1 className="header-message-no-favorites">You have no favorite products</h1>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Favorites;
