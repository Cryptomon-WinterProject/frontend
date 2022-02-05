import React from "react";
import styles from "./Navbar.module.css";

import HomeIcon from "../../Assets/Navbar/HomeIcon.svg";
import BattleIcon from "../../Assets/Navbar/BattleIcon.svg";
import StoreIcon from "../../Assets/Navbar/StoreIcon.svg";

import ActiveHomeIcon from "../../Assets/Navbar/ActiveHomeIcon.svg";
import ActiveBattleIcon from "../../Assets/Navbar/ActiveBattleIcon.svg";
import ActiveStoreIcon from "../../Assets/Navbar/ActiveStoreIcon.svg";

function Navbar() {
  const [activeCategory, setActiveCategory] = React.useState("Home");

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.NavbarWrapper}>
      <div
        className={styles.Category}
        style={
          activeCategory === "Home" ? { background: "var(--white)" } : null
        }
        onClick={() => handleClick("Home")}
      >
        <img
          src={activeCategory === "Home" ? ActiveHomeIcon : HomeIcon}
          alt="Home"
        />
      </div>
      <div
        className={styles.Category}
        style={
          activeCategory === "Battle" ? { background: "var(--white)" } : null
        }
        onClick={() => handleClick("Battle")}
      >
        <img
          src={activeCategory === "Battle" ? ActiveBattleIcon : BattleIcon}
          alt="Battle"
        />
      </div>
      <div
        className={styles.Category}
        style={
          activeCategory === "Store" ? { background: "var(--white)" } : null
        }
        onClick={() => handleClick("Store")}
      >
        <img
          src={activeCategory === "Store" ? ActiveStoreIcon : StoreIcon}
          alt="Store"
        />
      </div>
    </div>
  );
}

export default Navbar;
