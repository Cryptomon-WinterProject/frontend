import React from "react";
import styles from "./UpperSection.module.css";

import Logo from "../../../Assets/General/Logo.svg";
import ProfilePic from "../../../Assets/General/ProfilePic.png";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";
import MonCoinIcon from "../../../Assets/LandingPage/M-moncoin.svg";

function UpperSection({
  playerXP = 200,
  totalXP = 300,
  monCoins = 100,
  level = 26,
}) {
  return (
    <div className={styles.UpperSectionWrapper}>
      <img src={Logo} alt="Logo" className={styles.CryptomonLogo} />
      <p className={styles.ProfileHeading}>Your Profile</p>
      <div className={styles.ProfileWrapper}>
        <img src={ProfilePic} alt="Profile" className={styles.ProfilePic} />
        <div className={styles.ProfileInfo}>
          <p className={styles.ProfileName}>John Doe</p>
          <div className={styles.ProfileLevelContainer}>
            <div className={styles.ProfileLevelWrapper}>
              <p className={styles.ProfileLevel}>{level}</p>
              <img src={StarLevel} alt="Star Level" />
            </div>
            <div style={{ width: "100%" }}>
              <div className={styles.ProgressBarBorder}>
                <div
                  className={styles.ProgressBarFill}
                  style={{ width: `${(playerXP / totalXP) * 100}%` }}
                ></div>
              </div>
              <p className={styles.ProfileXP}>
                {playerXP}/{totalXP} XP
              </p>
            </div>
          </div>
          <div className={styles.MonCoinBalanceContainer}>
            <div className={styles.MonCoinBalanceWrapper}>
              <p className={styles.MonCoinBalanceHeading}>Balance</p>
              <div className={styles.MonCoinBalance}>
                <p className={styles.MonCoinBalanceNumber}>{monCoins}</p>
                <img
                  src={MonCoinIcon}
                  alt="Logo"
                  className={styles.MonCoinIcon}
                />
              </div>
            </div>
            <div className={styles.AddBalanceButtonWrapper}>
              <p className={styles.PlusIcon}>+</p>
              <p className={styles.AddBalanceButtonText}>Add Balance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperSection;
