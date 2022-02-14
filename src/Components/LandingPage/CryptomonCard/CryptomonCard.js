import React from "react";

import styles from "./CryptomonCard.module.css";

import PokemonImage from "../../../Assets/LandingPage/Pokemon.png";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";
import { calculateReadyTime } from "../../../Utils/helper/calculateReadyTime";
import { useDispatch } from "react-redux";
import Training from "../../PopupComponents/TrainingPopup";

function CryptomonCard({ cardData }) {
  const timeLeft = calculateReadyTime(cardData.readyTime);
  const dispatch = useDispatch();

  return (
    <div
      className={styles.CryptomonCardWrapper}
      onClick={() => {
        dispatch({
          type: "HANDLE_POPUP_COMPONENT_RENDER",
          popupComponent: <Training cardData={cardData} />,
        });
        dispatch({
          type: "HANDLE_POPUP_OPEN",
          popupOpen: true,
        });
      }}
    >
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
                width: `${
                  (cardData.XP / (80 + cardData.monLevel * 20)) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className={styles.MonXP}>
            {cardData.XP}/{80 + cardData.monLevel * 20} XP
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
