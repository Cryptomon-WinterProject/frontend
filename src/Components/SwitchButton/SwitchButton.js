import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SwitchButton.module.css";

const SwitchButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const switchState = useSelector((state) => state.navbarReducer.switchState);

  const handleClick = (category) => {
    dispatch({
      type: "SET_SWITCH_STATE",
      state: category,
    });
    history.push(`/${category}`);
  };
  return (
    <div className={styles.SwitchBarWrapper}>
      <div
        className={styles.SwitchStore}
        style={
          switchState === "store"
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
          switchState === "auction"
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
