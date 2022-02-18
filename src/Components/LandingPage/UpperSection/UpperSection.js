import React from "react";
import styles from "./UpperSection.module.css";

import Logo from "../../../Assets/General/Logo.svg";
import ProfilePic from "../../../Assets/General/ProfilePic.png";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";
import MonCoinIcon from "../../../Assets/LandingPage/M-moncoin.svg";
import Button from "../../Button";
import { ReactComponent as PlusIcon } from "../../../Assets/General/Plus.svg";
import { useSelector } from "react-redux";
import { calculatePlayerXP } from "../../../Utils/helper/calcPlayerXP";
import { addBalance } from "../../../Services/user.service";

function UpperSection() {
  const userData = useSelector((state) => state.userReducer.userDetails);
  const playerXP = calculatePlayerXP(userData.winCount, userData.level);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);

  const handleAddBalance = async () => {
    await addBalance(contract, account, Math.pow(10, 14));
  };

  return (
    <div className={styles.UpperSectionWrapper}>
      <img src={Logo} alt="Logo" className={styles.CryptomonLogo} />
      <p className={styles.ProfileHeading}>Your Profile</p>
      <div className={styles.ProfileWrapper}>
        <img
          src={userData.profilePictureURL}
          alt="Profile"
          className={styles.ProfilePic}
        />
        <div className={styles.ProfileInfo}>
          <p className={styles.ProfileName}>{userData.name}</p>
          <div className={styles.ProfileLevelContainer}>
            <div className={styles.ProfileLevelWrapper}>
              <p className={styles.ProfileLevel}>{userData.level}</p>
              <img src={StarLevel} alt="Star Level" />
            </div>
            <div style={{ width: "100%" }}>
              <div className={styles.ProgressBarBorder}>
                <div
                  className={styles.ProgressBarFill}
                  style={{ width: `${playerXP}%` }}
                ></div>
              </div>
              <p className={styles.ProfileXP}>{playerXP}/100 XP</p>
            </div>
          </div>
          <div className={styles.MonCoinBalanceContainer}>
            <div className={styles.MonCoinBalanceWrapper}>
              <p className={styles.MonCoinBalanceHeading}>Balance</p>
              <div className={styles.MonCoinBalance}>
                <p className={styles.MonCoinBalanceNumber}>
                  {userData.monCoinBalance}
                </p>
                <img
                  src={MonCoinIcon}
                  alt="Logo"
                  className={styles.MonCoinIcon}
                />
              </div>
            </div>
            <Button
              name="Add Balance"
              primaryColor="var(--ter-black)"
              inverted
              wrapperClass={styles.AddBalanceButton}
              withIcon
              IconComp={PlusIcon}
              hoverBgColor="var(--white)"
              onClick={handleAddBalance}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperSection;
