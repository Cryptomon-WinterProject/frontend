import React from "react";
import styles from "./LowerSection.module.css";
import AuctionCard from "../AuctionCard";

const LowerSection = () => {
  return (
    <div className={styles.LowerSectionWrapper}>
      <div className={styles.Heading}>Active Auctions</div>
      <div className={styles.Cards}>
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </div>
    </div>
  );
};

export default LowerSection;
