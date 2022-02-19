import React, { useEffect, useState } from "react";

import styles from "./RightContainer.module.css";
import starLevel from "../../../Assets/LandingPage/StarLevel.svg";
import data from "../staticData";
import Logo from "../../../Assets/General/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import ChallengePlayer from "../../PopupComponents/ChallengePlayer";
import PokemonCards from "./PokemonCards";
import { calculateReadyTime } from "../../../Utils/helper/calculateReadyTime.js";
import OnlinePlayerCard from "./OnlinePlayerCard/OnlinePlayerCard";
import { getOnlinePlayers } from "../../../Services/battle.service";
import CustomPreloader from "../../PreLoader/CustomPreloader";

function RightContainer() {
  const dispatch = useDispatch();
  const monCards = useSelector((state) => state.userReducer.monCards);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (account) {
      let localOnlinePlayers = await getOnlinePlayers(contract);
      setOnlinePlayers(localOnlinePlayers);
      contract.events.ChallengeReady(async (error, event) => {
        if (error) {
          console.log("error:", error);
        } else {
          if (event.returnValues._ready) {
            localOnlinePlayers = [
              ...localOnlinePlayers,
              event.returnValues._player,
            ];
            setOnlinePlayers(localOnlinePlayers);
          } else {
            localOnlinePlayers = localOnlinePlayers.filter(
              (player) => player !== event.returnValues._player
            );
            setOnlinePlayers(localOnlinePlayers);
          }
        }
      });
      setLoading(false);
    }
  }, [account]);

  const handleClick = (opponentData) => {
    dispatch({
      type: "HANDLE_POPUP_OPEN",
      popupOpen: true,
    });
    dispatch({
      type: "HANDLE_POPUP_COMPONENT_RENDER",
      popupComponent: <ChallengePlayer opponentData={opponentData} />,
    });
  };

  const pokeMonList = monCards.map((cryptomon, index) => {
    if (calculateReadyTime(cryptomon.readyTime) > 0) {
      return;
    }
    return (
      <PokemonCards
        key={index}
        monProfile={cryptomon.monImageUrl}
        starLevelProfile={starLevel}
        monLevel={cryptomon.monLevel}
        monName={cryptomon.monName}
      />
    );
  });

  const challengeArrList = onlinePlayers
    ?.filter((player) => player !== account)
    .map((player, index) => {
      return (
        <OnlinePlayerCard
          playerAddress={player}
          key={index}
          handleClick={handleClick}
        />
      );
    });

  return (
    <div className={styles.WrapperWrapperWrapper}>
      <img src={Logo} alt="Logo" className={styles.CryptomonLogo} />

      <div className={styles.WrapperWrapper}>
        <h2 className={styles.Heading}>{data.heading[0]}</h2>
        <div className={styles.AvialPokeList}>{pokeMonList}</div>
      </div>
      <div className={styles.Wrapper}>
        <h2 className={styles.Heading}>{data.heading[1]}</h2>
        <div className={styles.ChallengeList}>
          {loading ? <CustomPreloader /> : challengeArrList}
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
