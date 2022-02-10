import React from "react";
import styles from "./Navbar.module.css";

import HomeIcon from "../../Assets/Navbar/HomeIcon.svg";
import BattleIcon from "../../Assets/Navbar/BattleIcon.svg";
import StoreIcon from "../../Assets/Navbar/StoreIcon.svg";

import ActiveHomeIcon from "../../Assets/Navbar/ActiveHomeIcon.svg";
import ActiveBattleIcon from "../../Assets/Navbar/ActiveBattleIcon.svg";
import ActiveStoreIcon from "../../Assets/Navbar/ActiveStoreIcon.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const navbarState = useSelector((state) => state.navbarReducer.navbarState);

  const handleClick = (category) => {
    dispatch({
      type: "SET_NAVBAR_STATE",
      state: category,
    });
    history.push(`/${category}`);
  };

  return (
    <div className={styles.NavbarWrapper}>
      <div
        className={styles.Category}
        style={navbarState === "home" ? { background: "var(--white)" } : null}
        onClick={() => handleClick("home")}
      >
        <img
          src={navbarState === "home" ? ActiveHomeIcon : HomeIcon}
          alt="home"
        />
      </div>
      <div
        className={styles.Category}
        style={navbarState === "battle" ? { background: "var(--white)" } : null}
        onClick={() => handleClick("battle")}
      >
        <img
          src={navbarState === "battle" ? ActiveBattleIcon : BattleIcon}
          alt="battle"
        />
      </div>
      <div
        className={styles.Category}
        style={navbarState === "store" ? { background: "var(--white)" } : null}
        onClick={() => handleClick("store")}
      >
        <img
          src={navbarState === "store" ? ActiveStoreIcon : StoreIcon}
          alt="store"
        />
      </div>
    </div>
  );
}

export default Navbar;
