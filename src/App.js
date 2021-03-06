import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Web3 from "web3";
import "./Utils/env";

import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.css";

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
import { useDispatch, useSelector } from "react-redux";
import { getUserCards, getUserData } from "./Services/user.service";
import { useLocation } from "react-router-dom";
import { getStoreCards } from "./Services/store.service";
import PopUp from "./Components/PopUp";
import socketIo from "socket.io-client";
import { SOCKET_URL } from "./Utils/constants";
import { checkChallangeStatus, getPlayerData } from "./Services/battle.service";
import { ToastContainer } from "react-toastify";
import notify from "./Utils/helper/notifyToast";
import AcceptChallenge from "./Components/PopupComponents/AcceptChallenge/index";
import {
  HANDLE_POPUP_COMPONENT_RENDER,
  HANDLE_POPUP_OPEN,
  SET_CONTRACT_DETAILS,
  SET_MON_CARDS,
  SET_STORE_CARDS,
  SET_USER_DETAILS,
} from "./Redux/ActionTypes";
import { soliditySha3 } from "web3-utils";
import ChallengeResult from "./Components/PopupComponents/ChallengeResult/index";
import { SocketContext } from "./socket";
import { Redirect } from "react-router-dom";

const App = () => {
  const history = useHistory();
  // const socket = useRef();
  const socket = useContext(SocketContext);

  const activeChallenges = useRef([]);
  const componentToRender = useSelector(
    (state) => state.popupHandle.popupComponent
  );
  const popUpState = useSelector((state) => state.popupHandle.popupOpen);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const userDetails = useSelector((state) => state.userReducer.userDetails);
  const location = useLocation();
  const dispatch = useDispatch();
  const [isInitalized, setIsInitalized] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState([]);

  useEffect(() => {
    socket.on("statusUpdate", async (players) => {
      setOnlinePlayers(players);
    });
    async function load() {
      let appdataLocale = {};

      const web3 = new Web3(Web3.givenProvider);
      appdataLocale.account = (await web3.eth.requestAccounts())[0];

      appdataLocale.contract = new web3.eth.Contract(abi, address);

      dispatch({
        type: SET_CONTRACT_DETAILS,
        data: appdataLocale,
      });
    }

    load();
    return () => {
      socket.off("statusUpdate");
    };
  }, [socket]);

  useEffect(() => {
    var curState =
      location.pathname.split("/")[location.pathname.split("/").length - 1];
    dispatch({
      type: "SET_NAVBAR_STATE",
      state: curState,
    });
  }, [location]);

  async function setUserData() {
    const userDetails = await getUserData(contract, account);
    if (userDetails?.verified) {
      const monCards = await getUserCards(contract, account);
      const storeCards = await getStoreCards(contract, account);

      contract.events.NewChallenge({ fromBlock: 0 }, async (error, event) => {
        if (error) {
          console.log("error:", error);
        } else {
          const opponent = event.returnValues._opponent;
          const challanger = event.returnValues._challenger;

          const challangeHash = soliditySha3(
            { type: "address", value: challanger },
            { type: "address", value: opponent }
          );

          const challengeStatus = await checkChallangeStatus(
            contract,
            account,
            challangeHash
          );

          if (parseInt(challengeStatus) === 1) {
            if (opponent === account) {
              activeChallenges.current.push(challangeHash);

              const battlingMonIds = event.returnValues._monIds;
              const challangerData = await getPlayerData(contract, challanger);

              notify(`You have a challenge from ${challangerData.name}`);

              dispatch({
                type: HANDLE_POPUP_OPEN,
                popupOpen: true,
              });
              dispatch({
                type: HANDLE_POPUP_COMPONENT_RENDER,
                popupComponent: (
                  <AcceptChallenge
                    opponentData={challangerData}
                    battlingMonIds={battlingMonIds}
                  />
                ),
              });
            }
            if (challanger === account) {
              activeChallenges.current.push(challangeHash);
            }
          }
        }
      });

      contract.events.AcceptChallenge(async (error, event) => {
        if (error) {
          console.log("error:", error);
        } else {
          const receivedChallangeHash = event.returnValues._challengeHash;
          if (activeChallenges.current.includes(receivedChallangeHash)) {
            const blockNumber = event.blockNumber;
            notify("Result of your challenge has been announced");
            dispatch({
              type: HANDLE_POPUP_OPEN,
              popupOpen: true,
            });
            dispatch({
              type: HANDLE_POPUP_COMPONENT_RENDER,
              popupComponent: (
                <ChallengeResult
                  challengeHash={receivedChallangeHash}
                  blockNumber={blockNumber}
                />
              ),
            });
          }
        }
      });

      dispatch({
        type: SET_USER_DETAILS,
        data: userDetails,
      });

      dispatch({
        type: SET_MON_CARDS,
        data: monCards,
      });

      dispatch({
        type: SET_STORE_CARDS,
        data: storeCards,
      });

      socket.emit("login", { address: account });
    } else {
      setIsInitalized(true);
    }
  }
  useEffect(() => {
    if (account) {
      setUserData();
    }
  }, [account]);

  useEffect(() => {
    if (userDetails) {
      setIsInitalized(true);
    }
  }, [userDetails]);

  return (
    <>
      <ToastContainer bodyClassName={styles.ToastBody} />
      {isInitalized ? (
        <>
          <Switch>
            {userDetails?.verified ? (
              <>
                <Route exact path="/home">
                  <LandingPage />
                </Route>
                <Route exact path="/battle">
                  <BattlePage onlinePlayers={onlinePlayers} />
                </Route>
                <Route exact path="/store">
                  <StorePage />
                </Route>
                <Route exact path="/auction">
                  <AuctionPage />
                </Route>
                <Route exact path="/training">
                  <Training />
                </Route>
                <Route exact path="/bid">
                  <PlaceBid />
                </Route>
                <Route
                  exact
                  path="*"
                  render={() => <Redirect to={{ pathname: "/home" }} />}
                />
              </>
            ) : (
              <>
                <Route exact path="/">
                  <SignUp setIsInitalized={setIsInitalized} />
                </Route>
                <Route path="/*">
                  <Redirect to="/" />
                </Route>
              </>
            )}
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
      ) : (
        <PreLoader />
      )}
    </>
  );
};

export default App;
