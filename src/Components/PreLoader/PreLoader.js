import React from "react";
import styles from "./PreLoader.module.css";
import CryptomomLogo from "../../Assets/General/Logo.svg";
import Loading from "../../Assets/PreLoader/lOADING....svg";
import CryptomonGif from "../../Assets/PreLoader/loader.gif";
import Background from "../../Assets/SignUpPage/bggg 1.svg";

function PreLoader() {
  return (
    <div className={styles.PreLoaderWrapper}>
      <img src={Background} className={styles.PreloaderBg}></img>
      <img src={Loading} className={styles.Loading} alt="loading" />
      <div className={styles.Preloader}>
        <img
          src={CryptomomLogo}
          alt="cryptomon"
          className={styles.CryptomomLogo}
        />
        <img
          src={CryptomonGif}
          alt="cryptomonGif"
          className={styles.CryptomonGif}
        />
      </div>
    </div>
  );
}

export default PreLoader;
