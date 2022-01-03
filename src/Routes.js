import { BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import { useState } from "react";
import Authentication from "./pages/authentication/Authentication";
import Home from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Product from "./pages/prouct-page/ProductPage";
import Signup from "./pages/authentication/Signup";

import Header from "./components/Header/Header";

export const cartContext = React.createContext();

const Routes = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <cartContext.Provider value={{ cartItems: cartItems, setCartItems:setCartItems }}>
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/Signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/product" component={Product} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
    </cartContext.Provider>
  );
};

export default Routes;
