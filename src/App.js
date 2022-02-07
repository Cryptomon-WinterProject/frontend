import React from "react";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import StorePage from "./Containers/StorePage/StorePage";
import AuctionPage from "./Containers/AuctionPage/index";
import SignUp from "./Components/SignUp/SignUp";
import PreLoader from "./Components/PreLoader/PreLoader";
import Training from "./Components/Training Popup/Training";

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
      <Route exact path="/preloader">
        <PreLoader />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/training">
        <Training />
      </Route>
    </Switch>
  );
};

export default App;
