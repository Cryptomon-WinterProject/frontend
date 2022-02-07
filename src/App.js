import React from "react";

import { Switch, Route } from "react-router-dom";

<<<<<<< HEAD
import Home from "./Containers/Home";
import SignUp from "./Components/SignUp/SignUp";
import PreLoader from "./Components/PreLoader/PreLoader";
=======
// import LandingPage from "./Containers/LandingPage";
import AuctionPage from "./Containers/AuctionPage";
>>>>>>> 0f4a50761044ed6b6df57fd33f212d797668c2e6

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
<<<<<<< HEAD
        <Home />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/preloader">
        <PreLoader />
=======
        {/* <LandingPage /> */}
        <AuctionPage />
>>>>>>> 0f4a50761044ed6b6df57fd33f212d797668c2e6
      </Route>
    </Switch>
  );
};

export default App;
