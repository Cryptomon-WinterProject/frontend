import React from "react";
import styles from "./UpperSection.module.css";
import Logo from "../../../Assets/General/Logo.svg";

const UpperSection = () => {
  return (
    <div className={styles.UpperSectionWrapper}>
      <img src={Logo} alt="Logo" className={styles.CryptomonLogo} />
    </div>
  );
};

export default UpperSection;
