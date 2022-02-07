import React from "react";
import styles from "./AuctionPage.module.css";
import LowerSection from "../../Components/AuctionPage/LowerSection";
import UpperSection from "../../Components/AuctionPage/UpperSection";
import Navbar from "../../Components/Navbar";

function AuctionPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.AuctionPageContent}>
        <UpperSection />
        <LowerSection />
      </div>
    </div>
  );
}

export default AuctionPage;
