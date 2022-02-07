import React from "react";
import styles from "./AuctionCard.module.css";
import PokemonImage from "../../../Assets/LandingPage/Pokemon.png";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";
import MonCoin from "../../../Assets/LandingPage/M-moncoin.svg";

function AuctionCard({ monXP = 200, totalXP = 300, readyTime = 25 }) {
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
      <div className={styles.BidBoxWrapper}>
        <div className={styles.BidBoxLeftWrapper}>
          <p className={styles.BidBoxLeftContent}>Bid starts from </p>
          <p className={styles.BidBoxLeftNumber}>50 </p>
          <img
            src={MonCoin}
            className={styles.BidBoxLeftImage}
            alt="Mon Coin"
          />
        </div>
        <div className={styles.BidBoxRightWrapper}>
          <p className={styles.BidBoxRightContent}>Highest bid of</p>
          <p className={styles.BidBoxRightNumber}>90 </p>
          <img
            src={MonCoin}
            className={styles.BidBoxRightImage}
            alt="Mon Coin"
          />
        </div>
      </div>
      <button className={styles.BidButton}>place bid</button>
    </div>
  );
}

export default AuctionCard;
