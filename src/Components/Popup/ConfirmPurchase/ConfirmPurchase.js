import React from "react";
import styles from "./ConfirmPurchase.module.css";
import cross from "../../../Assets/AddAuction/cross_black.svg";
import poke from "../../../Assets/PlaceBid/poke.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";

function ConfirmPurchase() {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.PopupWrapper}>
        <div className={styles.Topbar}>
          <div className={styles.Logo}>
            <span className={styles.yellow}>Confirm </span>Purchase
          </div>
          <img src={cross} alt="" className={styles.cross} />
        </div>
        <div className={styles.BodyWrapper}>
          <div className={styles.Heading}>
            Are you sure you want to purchase &nbsp;
            <span className={styles.yellow}>pichu</span> for 45{" "}
            <img src={moncoin} alt="" className={styles.moncoin} />
          </div>
          <div className={styles.FinalButton}>
            Confirm and pay 45{" "}
            <img src={moncoin} alt="" className={styles.moncoin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPurchase;
