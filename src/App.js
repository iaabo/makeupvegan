import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import ProductList from "./components/Products/ProductList";
/* import Favorites from "./components/Favorites/Favorites"; */
import About from "./components/About/About";
import FeedList from "./components/Feed/FeedList";
/* import FavouriteProductsProvider from "./contexts/FavouritesContext"; */

function App() {
  return (
    <div className="App">
    {/*   <FavouriteProductsProvider> */}
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
    {/*       <Route path="/favorites" component={Favorites} /> */}
          <Route exact path="/home" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/about-us" component={About} />
          <Route path="/community" component={FeedList} />
          <Redirect to="/home" />
        </Switch>
    {/*   </FavouriteProductsProvider> */}
    </div>
  );
}

export default App;
