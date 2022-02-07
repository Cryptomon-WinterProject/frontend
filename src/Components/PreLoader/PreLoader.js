import React from "react";
import styles from "./PreLoader.module.css";
import CryptomomLogo from "../../Assets/General/Logo.svg";
import Loading from "../../Assets/PreLoader/lOADING....svg";
import CryptomonGif from "../../Assets/PreLoader/loader.gif";

function PreLoader() {
  return (
    <div className={styles.PreLoaderWrapper}>
      <div className={styles.LoadingLogoBox}>
        <img src={Loading} alt="Loading" className={styles.LoadingLogo} />
      </div>
      <div className={styles.PreLoaderBoxWrapper}>
        <div className={styles.PreLoaderBoxBorder}>
          <img
            src={CryptomomLogo}
            alt="Cryptomon"
            className={styles.CryptomomLogo}
          />
            <img
              src={CryptomonGif}
              alt="Cryptomon"
              className={styles.CryptomomGif}
            />
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
