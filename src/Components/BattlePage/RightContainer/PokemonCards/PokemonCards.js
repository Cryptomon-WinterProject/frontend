import React from "react";
import styles from "./PokemonCards.module.css";

function PokemonCards({ monProfile, starLevelProfile, monLevel, monName }) {
  return (
    <div className={styles.CryptomonCardWrapper}>
      <img src={monProfile} alt="Pokemon" className={styles.MonProfile} />
      <div className={styles.LowerContainerWrapper}>
        <div className={styles.MonLevelXPWrapper}>
          <img
            src={starLevelProfile}
            alt="star-level"
            className={styles.StarLevel}
          />
          <p className={styles.MonLevel}>{monLevel}</p>
        </div>
        <p className={styles.MonName}>{monName}</p>
      </div>
    </div>
  );
}

export default PokemonCards;
