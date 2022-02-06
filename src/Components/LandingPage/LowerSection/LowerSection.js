import React from "react";
import CryptomonCard from "../CryptomonCard";
import styles from "./LowerSection.module.css";

function LowerSection() {
  return (
    <div className={styles.LowerSectionContainer}>
      <p className={styles.LowerSectionHeading}>Your Collection</p>
      <div className={styles.CollectionContainer}>
        <CryptomonCard />
        <CryptomonCard />
        <CryptomonCard />
        <CryptomonCard />
        <CryptomonCard />
        <CryptomonCard />
        <CryptomonCard />
      </div>
    </div>
  );
}

export default LowerSection;
