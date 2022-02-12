import React, { useEffect, useState } from "react";

import styles from "./RightContainer.module.css";
import starLevel from "../../../Assets/LandingPage/StarLevel.svg";
import data from "../staticData";
import { useDispatch, useSelector } from "react-redux";
import ChallengePlayer from "../../PopupComponents/ChallengePlayer";
import PokemonCards from "./PokemonCards";
import { calculateReadyTime } from "../../../Utils/helper/calculateReadyTime.js";
import { getOnlinePlayers } from "../../../Services/battle.service";

function RightContainer() {
  const dispatch = useDispatch();
  const monCards = useSelector((state) => state.userReducer.monCards);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const [onlinePlayers, setOnlinePlayers] = useState([]);

  useEffect(async () => {
    if (account) {
      const onlinePlayers = await getOnlinePlayers(contract, account);
      setOnlinePlayers(onlinePlayers);
    }
  }, [account]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "HANDLE_POPUP_OPEN",
      popupOpen: true,
    });
    dispatch({
      type: "HANDLE_POPUP_COMPONENT_RENDER",
      popupComponent: <ChallengePlayer />,
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

  const challengeArrList = onlinePlayers?.map((challenge, index) => {
    return (
      <div className={styles.ChallengeCardWrapper} key={index}>
        <div className={styles.UpperWrapper}>
          <img
            src={challenge.profilePictureURL}
            alt="challenge"
            className={styles.chalProfile}
          />
          <div className={styles.MonLevelXPWrapper2}>
            <img
              src={starLevel}
              alt="star-level"
              className={styles.StarLevel}
            />
            <p className={styles.MonLevel}>{challenge.level}</p>
          </div>
        </div>
        <div className={styles.LowerContainerWrapper2}>
          <p className={styles.chalName}>{challenge.name}</p>
          <button onClick={handleClick}>Challenge</button>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.WrapperWrapperWrapper}>
      <div className={styles.WrapperWrapper}>
        <h2 className={styles.Heading}>{data.heading[0]}</h2>
        <div className={styles.AvialPokeList}>{pokeMonList}</div>
      </div>
      <div className={styles.Wrapper}>
        <h2 className={styles.Heading}>{data.heading[1]}</h2>
        <div className={styles.ChallengeList}>{challengeArrList}</div>
      </div>
    </div>
  );
}

export default RightContainer;
