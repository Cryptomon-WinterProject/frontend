import React from "react";

import Navbar from "../../Components/Navbar";
import styles from "./BattlePage.module.css";
import RightContainer from "./../../Components/BattlePage/RightContainer";

function BattlePage({ onlinePlayers }) {
  return (
    <div className={styles.WrapperWrapper}>
      <Navbar />
      <div className={styles.Wrapper}>
        <RightContainer onlinePlayers={onlinePlayers} />
      </div>
    </div>
  );
}

export default BattlePage;
