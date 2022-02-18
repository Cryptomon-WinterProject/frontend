import React from "react";
import styles from "./StoreCard.module.css";

import PokemonImage from "../../../Assets/LandingPage/Pokemon.png";
import MonCoinIcon from "../../../Assets/LandingPage/M-moncoin.svg";
import Button from "../../Button";
import { useSelector } from "react-redux";
import { buyMonCard } from "../../../Services/store.service";

function StoreCard({ cardData }) {
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);

  function MonCoinComponent() {
    return (
      <div className={styles.MonPrice}>
        <p>{cardData.price}</p>
        <img
          src={MonCoinIcon}
          alt="monCoinIcon"
          className={styles.MonCoinIcon}
        />
      </div>
    );
  }

  const handlePurchase = async () => {
    await buyMonCard(contract, account, cardData.monIndex, cardData.price);
  };

  return (
    <div className={styles.StoreCardWrapper}>
      <img src={cardData.image} alt="Pokemon" className={styles.PokemonImage} />
      <div className={styles.StoreCardContent}>
        <p className={styles.StoreCardName}>{cardData.name}</p>
        <Button
          name="Purchase for "
          primaryColor="var(--ter-black)"
          inverted
          wrapperClass={styles.AddBalanceButton}
          withIcon
          IconComp={MonCoinComponent}
          hoverBgColor="var(--white)"
          reversed
          onClick={handlePurchase}
        />
      </div>
    </div>
  );
}

export default StoreCard;
