import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/de_be_beer/" component={Home} />
        <Route path="/de_be_beer/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
