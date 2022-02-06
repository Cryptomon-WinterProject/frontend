import React from "react";
import StoreCard from "../StoreCard";
import styles from "./StoreSection.module.css";

const StoreSection = () => {
  return (
    <div className={styles.StoreWrraper}>
        <div className={styles.CardCart}>
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      </div>
    </div>
  );
};

export default StoreSection;
