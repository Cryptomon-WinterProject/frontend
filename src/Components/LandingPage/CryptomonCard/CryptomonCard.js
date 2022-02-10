import React from "react";

import styles from "./CryptomonCard.module.css";

import PokemonImage from "../../../Assets/LandingPage/Pokemon.png";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";
import { calculateReadyTime } from "../../../Utils/helper/calculateReadyTime";

function CryptomonCard({ cardData, totalXP = 300 }) {
  const timeLeft = calculateReadyTime(cardData.readyTime);
  return (
    <div className={styles.CryptomonCardWrapper}>
      <img
        src={cardData.monImageUrl}
        alt="Pokemon"
        className={styles.MonProfile}
      />
      <p className={styles.MonName}>{cardData.monName}</p>
      <div className={styles.ProgressBarWrapper}>
        <div style={{ width: "100%" }}>
          <div className={styles.ProgressBarBorder}>
            <div
              className={styles.ProgressBarFill}
              style={{
                width: `${(cardData.XP / (80 + cardData.XP * 20)) * 100}%`,
              }}
            ></div>
          </div>
          <p className={styles.MonXP}>
            {cardData.XP}/{80 + cardData.XP * 20} XP
          </p>
        </div>
        <div className={styles.MonLevelWrapper}>
          <p className={styles.MonLevel}>{cardData.monLevel}</p>
          <img src={StarLevel} alt="Star Level" />
        </div>
      </div>
      <div
        className={styles.MonAvailibility}
        style={
          timeLeft > 0
            ? { borderColor: "var(--red-primary)", color: "var(--red-primary)" }
            : {
                cursor: "pointer",
                borderColor: "var(--green-primary)",
                color: "var(--green-primary)",
              }
        }
      >
        {timeLeft > 0 ? `Ready in ${timeLeft} min` : "Ready for battle"}
      </div>
    </div>
  );
}

export default CryptomonCard;
