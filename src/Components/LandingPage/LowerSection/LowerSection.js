import React from "react";
import { useSelector } from "react-redux";
import CryptomonCard from "../CryptomonCard";
import styles from "./LowerSection.module.css";

function LowerSection() {
  const monCards = useSelector((state) => state.userReducer.monCards);

  const cardList = monCards.map((card, index) => {
    return <CryptomonCard cardData={card} key={index} />;
  });

  return (
    <div className={styles.LowerSectionContainer}>
      <p className={styles.LowerSectionHeading}>Your Collection</p>
      <div className={styles.CollectionContainer}>{cardList}</div>
    </div>
  );
}

export default LowerSection;
