import React from "react";
import styles from "./UpperSection.module.css";
import Logo from "../../../Assets/General/Logo.svg";
import { ReactComponent as PlusIcon } from "../../../Assets/General/Plus.svg";
import Button from "../../Button";

function UpperSection() {
  return (
    <div className={styles.UpperSectionWrapper}>
      <img src={Logo} alt="Logo" className={styles.CryptomonLogo} />
      <Button
        name="Sell Cryptomon"
        primaryColor="var(--ter-black)"
        inverted
        wrapperClass={styles.SellButton}
        withIcon
        IconComp={PlusIcon}
        hoverBgColor="var(--white)"
      />
    </div>
  );
}
export default UpperSection;
