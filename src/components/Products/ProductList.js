import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Products from "./Products";
import "./ProductList.css";

class ProductList extends React.Component {
  state = {
    products: [],
    /*  visible: 6, */
    areOnlyRankedProductsDisplayed: false,
    productSearchValue: "",
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan`
      )
      .then((response) => this.setState({ products: response.data }));
  };

  handleRankedProducts = () => {
    this.setState({
      areOnlyRankedProductsDisplayed: !this.state
        .areOnlyRankedProductsDisplayed,
    });
  };
  searchProductHandler = (event) => {
    const inputValue = event.target.value;
    this.setState({ productSearchValue: inputValue });
  };


  render() {
    return (
      <div>
        <NavBar />
        <div className="img-container">
          <div className="background-container">
            <h1 className="header-message">
              Welcome to the Vegan Makeup Library. Search 100% cruelty-free
              makeup and see all the details.
            </h1>
          </div>
        </div>
        <div className="user-inputs">
          <input
            onChange={this.searchProductHandler}
            placeholder="Search for category"
            className="searchbar"
          />
          <button className="button-rank" onClick={this.handleRankedProducts}>
            {this.state.areOnlyRankedProductsDisplayed
              ? "Display All Products"
              : "Display only rating > 4"}
          </button>
        </div>
        <div>
          {this.state.products.length > 0 ? (
            <div className="container">
              {this.state.products
                .filter((item) => {
                  item.product_type = item.product_type.toLowerCase();
                  return item.product_type.startsWith(
                    this.state.productSearchValue.toLowerCase()
                  );
                })
                .filter((product) =>
                  this.state.areOnlyRankedProductsDisplayed
                    ? product.rating > 4
                    : product
                )
                .map((product) => (
                  <Products {...product} />
                ))}
            </div>
          ) : (
            <div className="loading-spinner">
             <Loader type="BallTriangle" color=" #02411e" height={80} width={80}/>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default ProductList;
