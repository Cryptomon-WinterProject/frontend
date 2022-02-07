import React from "react";
import styles from "./LandingPage.module.css";
import LowerSection from "../../Components/LandingPage/LowerSection";
import UpperSection from "../../Components/LandingPage/UpperSection";
import Navbar from "../../Components/Navbar";

function LandingPage() {
  return (
    <div className={styles.LandingPageContainer}>
      <Navbar />
      <div className={styles.LandingPageContent}>
        <UpperSection />
        <LowerSection />
      </div>
    </div>
  );
}

export default LandingPage;
