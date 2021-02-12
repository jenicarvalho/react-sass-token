import React from "react";
import { Route, Switch } from "react-router-dom";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";

function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" component={Produtos} />
    </Switch>
  )
}

export default Routes;