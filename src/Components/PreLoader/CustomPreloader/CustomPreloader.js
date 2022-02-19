import React from "react";
import styles from "./CustomPreloader.module.css";

function CustomPreloader() {
  return (
    <div className={styles.PreloaderWrapperWrapper}>
      <div className={styles.PreloaderWrapper}>
        <div className={styles.PreloaderOuterWrapper}></div>
        <div className={styles.PreloaderInnerWrapper}></div>
      </div>
    </div>
  );
}

export default CustomPreloader;
