import React from "react";

import styles from "./CryptomonCard.module.css";

import PokemonImage from "../../../Assets/LandingPage/Pokemon.png";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";

function CryptomonCard({ monXP = 200, totalXP = 300, readyTime = 25 }) {
  return (
    <div className={styles.CryptomonCardWrapper}>
      <img src={PokemonImage} alt="Pokemon" className={styles.MonProfile} />
      <p className={styles.MonName}>Pichu</p>
      <div className={styles.ProgressBarWrapper}>
        <div style={{ width: "100%" }}>
          <div className={styles.ProgressBarBorder}>
            <div
              className={styles.ProgressBarFill}
              style={{ width: `${(monXP / totalXP) * 100}%` }}
            ></div>
          </div>
          <p className={styles.MonXP}>
            {monXP}/{totalXP} XP
          </p>
        </div>
        <div className={styles.MonLevelWrapper}>
          <p className={styles.MonLevel}>15</p>
          <img src={StarLevel} alt="Star Level" />
        </div>
      </div>
      <div
        className={styles.MonAvailibility}
        style={
          readyTime
            ? { borderColor: "var(--red-primary)", color: "var(--red-primary)" }
            : {
                cursor: "pointer",
                borderColor: "var(--green-primary)",
                color: "var(--green-primary)",
              }
        }
      >
        {readyTime ? `Ready in ${readyTime} min` : "Ready for battle"}
      </div>
    </div>
  );
}

export default CryptomonCard;
