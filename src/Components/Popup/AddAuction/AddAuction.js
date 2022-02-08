import React from "react";
import styles from "./AddAuction.module.css";
import cross from "../../../Assets/AddAuction/cross_black.svg";
import poke from "../../../Assets/PlaceBid/poke.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";

function AddAuction() {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.PopupWrapper}>
        <div className={styles.Topbar}>
          <div className={styles.Logo}>
            <span className={styles.yellow}>Sell</span>Cryptomon
          </div>
          <img src={cross} alt="" className={styles.cross} />
        </div>
        <div className={styles.BodyWrapper}>
          <div className={styles.Heading}>
            <span className={styles.yellow}>SELECT CRYPTOMONS</span> FOR AUCTION
          </div>
          <div className={styles.CardContainer}></div>
          <div className={styles.InfoWrapper}>
            <div className={styles.Info}>
              <div className={styles.InfoHead}>Minimum Bid Price</div>
              <div className={styles.InfoDesc}> (Non Zero) </div>
            </div>
            <div className={styles.InfoButton}>
              50 <img src={moncoin} alt="" className={styles.moncoin} />
            </div>
          </div>
          <div className={styles.FinalButton}>Sell Cryptomon</div>
        </div>
      </div>
    </div>
  );
}

export default AddAuction;
