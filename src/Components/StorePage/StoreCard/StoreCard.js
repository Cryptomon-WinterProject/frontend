import React from "react";
import styles from "./StoreCard.module.css";

import PokemonImage from "../../../Assets/LandingPage/Pokemon.png";
import { ReactComponent as Plus } from "../../../Assets/General/Plus.svg";
import MonCoinIcon from "../../../Assets/LandingPage/M-moncoin.svg";
import Button from "../../Button";

function StoreCard({ monPrice = 30 }) {
  function MonCoinComponent() {
    return (
      <div className={styles.MonPrice}>
        <p>{monPrice}</p>
        <img
          src={MonCoinIcon}
          alt="monCoinIcon"
          className={styles.MonCoinIcon}
        />
      </div>
    );
  }

  return (
    <div className={styles.StoreCardWrapper}>
      <img src={PokemonImage} alt="Pokemon" className={styles.PokemonImage} />
      <div className={styles.StoreCardContent}>
        <p className={styles.StoreCardName}>Pichu</p>
        <Button
          name="Purchase for "
          primaryColor="var(--ter-black)"
          inverted
          wrapperClass={styles.AddBalanceButton}
          withIcon
          IconComp={MonCoinComponent}
          hoverBgColor="var(--white)"
          reversed
        />
      </div>
    </div>
  );
}

export default StoreCard;
