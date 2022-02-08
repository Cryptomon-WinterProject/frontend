import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SwitchButton.module.css";

const SwitchButton = () => {
  const history = useHistory();
  const [activeCategory, setActiveCategory] = React.useState("store");

  const handleClick = (category) => {
    setActiveCategory(category);
    history.push(`/${category}`);
  };
  return (
    <div className={styles.SwitchBarWrapper}>
      <div
        className={styles.SwitchStore}
        style={
          activeCategory === "store"
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
          activeCategory === "auction"
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
