import React from "react";
import Navbar from "../../Components/Navbar";
import styles from "./StorePage.module.css";
import UpperSection from "../../Components/StorePage/UpperSection";
import StoreSection from "../../Components/StorePage/StoreSection";

const StorePage = () => {
  return (
    <div className={styles.StorePageContainer}>
      <Navbar />
      <div className={styles.StoreContent}>
        <UpperSection />
        <StoreSection />
      </div>
    </div>
  );
};

export default StorePage;
