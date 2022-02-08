import React from "react";

import styles from "./RightContainer.module.css";
import data from "../staticData";

function RightContainer() {
  const pokeMonList = data.cryptomonCards.map((cryptomon, index) => {
    return (
      <div className={styles.CryptomonCardWrapper} key={index}>
        <img
          src={cryptomon.monProfile}
          alt="Pokemon"
          className={styles.MonProfile}
        />
        <div className={styles.LowerContainerWrapper}>
          <div className={styles.MonLevelXPWrapper}>
            <img
              src={cryptomon.starLevelProfile}
              alt="star-level"
              className={styles.StarLevel}
            />
            <p className={styles.MonLevel}>{cryptomon.monXP}</p>
          </div>
          <p className={styles.MonName}>{cryptomon.monName}</p>
        </div>
      </div>
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
          <button>Challenge</button>
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
