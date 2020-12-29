/* import React, { createContext, Component } from "react";

export const FavouritesContext = createContext();

class FavouriteProductsProvider extends Component {
  state = {
    favouriteProducts: [],
  };

  handleFavouriteProducts = (product, isFavourite) => {
    if (isFavourite) {
      // add product to favourites list
      const newFavouriteProductsList = [
        ...this.state.favouriteProducts,
        product,
      ];
      this.setState({ favouriteProducts: newFavouriteProductsList });
    }
  };

  render() {
    return (
      <FavouritesContext.Provider
        value={{
          favouriteProducts: this.state.favouriteProducts,
          handleFavouriteProducts: this.handleFavouriteProducts,
        }}
      >
        {this.props.children}
      </FavouritesContext.Provider>
    );
  }
}

export default FavouriteProductsProvider;
 */