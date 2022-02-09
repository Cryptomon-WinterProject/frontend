import React from "react";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import AuctionPage from "./Containers/AuctionPage";
import BattlePage from "./Containers/BattlePage";
import StorePage from "./Containers/StorePage/StorePage";
import SignUp from "./Components/SignUp/SignUp";
import PreLoader from "./Components/PreLoader/PreLoader";
<<<<<<< HEAD
import Training from "./Components/PopupComponents/TrainingPopup/Training";
import PlaceBid from "./Components/PopupComponents/PlaceBid";
import PopUp from "./Components/PopUp";
import { useDispatch, useSelector } from "react-redux";
=======
import Training from "./Components/Training Popup/Training";
import PlaceBid from "./Components/Popup/PlaceBid";
import AddAuction from "./Components/Popup/AddAuction/AddAuction";
import ConfirmPurchase from "./Components/Popup/ConfirmPurchase/ConfirmPurchase";
import AddBalance from "./Components/Popup/AddBalance/AddBalance";
>>>>>>> 4555b744fd3cfe964756e5017fe369eab243c88f

const App = () => {
  const componentToRender = useSelector(
    (state) => state.popupHandle.popupComponent
  );
  const popUpState = useSelector((state) => state.popupHandle.popupOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/battle">
          <BattlePage />
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
        <Route exact path="/bid">
          <PlaceBid />
        </Route>
        <Route exact path="/addauction">
          <AddAuction />
      </Route>
      <Route exact path="/confirm">
          <ConfirmPurchase />
      </Route>
      <Route exact path="/balance">
          <AddBalance />
      </Route>
      </Switch>
      <PopUp
        ContentComp={componentToRender}
        isOpen={popUpState}
        closeFun={() => {
          dispatch({ type: "HANDLE_POPUP_OPEN", popUpState: false });
        }}
        isClosable={true}
        withBorder={false}
      />
    </>
    
  );
};

export default App;
