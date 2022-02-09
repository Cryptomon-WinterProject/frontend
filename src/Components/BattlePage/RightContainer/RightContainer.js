import React from "react";

import styles from "./RightContainer.module.css";
import data from "../staticData";
import { useDispatch } from "react-redux";
import ChallengePlayer from "../../PopupComponents/ChallengePlayer";
import PokemonCards from "./PokemonCards";

function RightContainer() {
  const dispatch = useDispatch();
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

  const pokeMonList = data.cryptomonCards.map((cryptomon, index) => {
    return (
      <PokemonCards
        key={index}
        monProfile={cryptomon.monProfile}
        starLevelProfile={cryptomon.starLevelProfile}
        monXP={cryptomon.monXP}
        monName={cryptomon.monName}
      />
    );
  });

  const challengeArrList = data.challengeOnline.map((challenge, index) => {
    return (
      <div className={styles.ChallengeCardWrapper} key={index}>
        <div className={styles.UpperWrapper}>
          <img
            src={challenge.chalProfile}
            alt="challenge"
            className={styles.ChallengeProfile}
          />
          <div className={styles.MonLevelXPWrapper2}>
            <img
              src={challenge.starLevelProfile}
              alt="star-level"
              className={styles.StarLevel}
            />
            <p className={styles.MonLevel}>{challenge.chalXP}</p>
          </div>
        </div>
        <div className={styles.LowerContainerWrapper2}>
          <p className={styles.chalName}>{challenge.chalName}</p>
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
