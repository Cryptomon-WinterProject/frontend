import React from "react";
import { useSelector } from "react-redux";
import StoreCard from "../StoreCard";
import styles from "./StoreSection.module.css";

const StoreSection = () => {
  const storeCards = useSelector((state) => state.userReducer.storeCards);

  const cardList = storeCards.map((card, index) => {
    return <StoreCard cardData={card} key={index} />;
  });

  return (
    <div className={styles.StoreWrraper}>
      <div className={styles.CardCart}>{cardList}</div>
    </div>
  );
};

export default StoreSection;
