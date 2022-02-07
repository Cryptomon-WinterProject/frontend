import React from "react";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import StorePage from "./Containers/StorePage/StorePage";
import AuctionPage from "./Containers/AuctionPage/index";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/store">
        <StorePage />
      </Route>
      <Route exact path="/auction">
        <AuctionPage />
      </Route>
    </Switch>
  );
};

export default App;
