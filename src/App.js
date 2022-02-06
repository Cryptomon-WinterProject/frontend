import React from "react";

import { Switch, Route } from "react-router-dom";

// import LandingPage from "./Containers/LandingPage";
import AuctionPage from "./Containers/AuctionPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        {/* <LandingPage /> */}
        <AuctionPage />
      </Route>
    </Switch>
  );
};

export default App;
