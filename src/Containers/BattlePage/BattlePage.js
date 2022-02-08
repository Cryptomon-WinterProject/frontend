import React from "react";

import Navbar from "../../Components/Navbar";
import styles from "./BattlePage.module.css";
import RightContainer from "./../../Components/BattlePage/RightContainer";

function BattlePage() {
  return (
    <div className={styles.WrapperWrapper}>
      <Navbar />
      <div className={styles.Wrapper}>
        <RightContainer />
      </div>
    </div>
  );
}

export default BattlePage;
