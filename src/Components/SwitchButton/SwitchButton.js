import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SwitchButton.module.css";

const SwitchButton = () => {
  const history = useHistory();
  const navbarState = useSelector((state) => state.navbarReducer.navbarState);

  const handleClick = (category) => {
    history.push(`/${category}`);
  };
  return (
    <div className={styles.SwitchBarWrapper}>
      <div
        className={styles.SwitchStore}
        style={
          navbarState === "store"
            ? { background: "var(--sec-black)", color: "var(--white)" }
            : null
        }
        onClick={() => handleClick("store")}
      >
        <p>Store</p>
      </div>
      <div
        className={styles.SwitchAuction}
        style={
          navbarState === "auction"
            ? { background: "var(--sec-black)", color: "var(--white)" }
            : null
        }
        onClick={() => handleClick("auction")}
      >
        <p>Auction</p>
      </div>
    </div>
  );
};

export default SwitchButton;
