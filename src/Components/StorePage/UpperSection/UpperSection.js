import React from "react";
import styles from "./UpperSection.module.css";
import Logo from "../../../Assets/General/Logo.svg";
import SwitchButton from "../../SwitchButton";

const UpperSection = () => {
  return (
    <div className={styles.UpperSectionWrapper}>
      <img src={Logo} alt="Logo" className={styles.CryptomonLogo} />
      <SwitchButton />
    </div>
  );
};

export default UpperSection;
