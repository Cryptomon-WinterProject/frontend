import React, { useEffect } from "react";
import Web3 from "web3";

import { Switch, Route } from "react-router-dom";
import { abi, address } from "./config";

import LandingPage from "./Containers/LandingPage";
import AuctionPage from "./Containers/AuctionPage";
import BattlePage from "./Containers/BattlePage";
import StorePage from "./Containers/StorePage/StorePage";
import SignUp from "./Components/SignUp/SignUp";
import PreLoader from "./Components/PreLoader/PreLoader";
import Training from "./Components/PopupComponents/TrainingPopup";
import PlaceBid from "./Components/PopupComponents/PlaceBid";
// import AddAuction from "./Components/Popup/AddAuction/AddAuction";
// import ConfirmPurchase from "./Components/Popup/ConfirmPurchase/ConfirmPurchase";
// import AddBalance from "./Components/Popup/AddBalance/AddBalance";
// import PopUp from "./Components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { getUserCards, getUserData } from "./Services/user.service";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const App = () => {
  const componentToRender = useSelector(
    (state) => state.popupHandle.popupComponent
  );
  const popUpState = useSelector((state) => state.popupHandle.popupOpen);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    async function load() {
      let appdataLocale = {};

      const web3 = new Web3(Web3.givenProvider);
      appdataLocale.account = (await web3.eth.requestAccounts())[0];
      appdataLocale.contract = new web3.eth.Contract(abi, address);

      dispatch({
        type: "SET_CONTRACT_DETAILS",
        data: appdataLocale,
      });
    }

    load();
  }, []);

  useEffect(() => {
    var curState =
      location.pathname.split("/")[location.pathname.split("/").length - 1];
    dispatch({
      type: "SET_NAVBAR_STATE",
      state: curState,
    });
  }, [location]);

  useEffect(() => {
    async function setUserData() {
      const userDetails = await getUserData(contract, account);
      if (userDetails.name) {
        history.push("/home");
        const monCards = await getUserCards(contract, account);

        dispatch({
          type: "SET_USER_DETAILS",
          data: userDetails,
        });

        dispatch({
          type: "SET_MON_CARDS",
          data: monCards,
        });
      }
    }
    if (account) {
      setUserData();
    }
  }, [account]);

  return (
    <>
      <Switch>
        <Route exact path="/home">
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
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route exact path="/training">
          <Training />
        </Route>
        <Route exact path="/bid">
          <PlaceBid />
        </Route>
        {/* <Route exact path="/addauction">
          <AddAuction />
        </Route> */}
        {/* <Route exact path="/confirm">
          <ConfirmPurchase />
        </Route>
        <Route exact path="/balance">
          <AddBalance />
        </Route> */}
      </Switch>
      {/* <PopUp
        ContentComp={componentToRender}
        isOpen={popUpState}
        closeFun={() => {
          dispatch({ type: "HANDLE_POPUP_OPEN", popUpState: false });
        }}
        isClosable={true}
        withBorder={false}
      /> */}
    </>
  );
};

export default App;
