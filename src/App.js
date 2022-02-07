import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import SignUp from "./Components/SignUp/SignUp";
import PreLoader from "./Components/PreLoader/PreLoader";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/preloader">
        <PreLoader />
      </Route>
    </Switch>
  );
};

export default App;
