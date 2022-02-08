import React from "react";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import AuctionPage from "./Containers/AuctionPage";
import BattlePage from "./Containers/BattlePage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        {/* <LandingPage /> */}
        {/* <AuctionPage /> */}
        <BattlePage />
      </Route>
    </Switch>
  );
};

export default App;
