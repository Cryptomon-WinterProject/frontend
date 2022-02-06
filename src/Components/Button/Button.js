import React from "react";

import styles from "./Button.module.css";

function Button({
  name,
  onClick,
  primaryColor,
  inverted,
  wrapperClass,
  id,
  withIcon,
  IconComp,
  iconClass,
  hoverBgColor,
  hoverColor,
  reversed,
}) {
  return (
    <button
      id={id}
      className={
        styles.Button +
        " " +
        (inverted ? styles.Inverted : "") +
        " " +
        wrapperClass +
        " " +
        (reversed ? styles.Reversed : "")
      }
      style={{
        "--main-color": primaryColor,
        "--main-hover-bg-color": hoverBgColor
          ? hoverBgColor
          : "var(--yellow-background)",
        "--main-hover-color": hoverColor ? hoverColor : primaryColor,
      }}
      onClick={onClick}
    >
      {withIcon && <IconComp className={styles.Icon + " " + iconClass} />}{" "}
      {name}
    </button>
  );
}

export default Button;
