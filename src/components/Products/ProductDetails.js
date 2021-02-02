import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import "./ProductDetails.css";
import { FavouritesContext } from "../../contexts/FavouritesContext";
import Footer from "../Footer/Footer";

class ProductDetails extends React.Component {
  static contextType = FavouritesContext;

  state = {
    product: {},
    favorite: false,
  };
  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = () => {
    axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan`
      )
      .then((response) => {
        const selectedProductId = Number(this.props.match.params.id);
        const product = response.data.filter(
          (product) => product.id === selectedProductId
        );
        this.setState({ product: product[0] }, () => {
          this.isProductFavourite();
        });
      });
  };

  isProductFavourite = () => {
    if (
      this.context.favouriteProducts.some(
        (product) => product.id === this.state.product.id
      )
    ) {
      this.setState({ favorite: true });
    }
  };

  render() {
    /*  console.log(Number(this.props.match.params.id)); */
    const { handleFavouriteProducts, favouriteProducts } = this.context;

    return (
      <div>
        <NavBar />
        <div className="wrapper">
          <div className="product-image">
            <img src={this.state.product.image_link} alt="" />
          </div>

          <div className="span-heart">
            <span
              style={{ fontSize: "45px" }}
              className={this.state.favorite ? "is-favorite" : ""}
              onClick={(event) => {
                const newFavorite = !this.state.favorite;
                this.setState({ favorite: newFavorite }, () => {
                  if (this.state.favorite) {
                    // product to be added
                    handleFavouriteProducts(this.state.product, true);
                  } else {
                    // product to be removed
                    handleFavouriteProducts(this.state.product, false);
                  }
                });
              }}
            >
              {" "}
              &#9829;
            </span>
          </div>
          <div className="product-info">
            <h1>
              Brand:
              {this.state.product.brand === "" ||
              this.state.product.brand === null
                ? "not available"
                : this.state.product.brand}
            </h1>
            <h2>Product type: {this.state.product.product_type}</h2>
            <h2>
              Category:
              {this.state.product.category === "" ||
              this.state.product.category === null
                ? "not available"
                : this.state.product.category}
            </h2>
            <h2>
              Name:
              {this.state.product.name === "" ||
              this.state.product.name === null
                ? "not available"
                : this.state.product.name}
            </h2>

            <div className="product-price-btn">
              <h2>
                Price:
                {this.state.product.price !== "0.0"
                  ? this.state.product.price
                  : "not available"}
              </h2>
              <div className="detail-buttons">
                <a
                  href={this.state.product.product_link}
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  className="button-product"
                >
                  Go to Store
                </a>
                <Link
                  to="/products"
                  style={{ textDecoration: "none", color: "white" }}
                  className="button-product"
                >
                  Return to search
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductDetails;
