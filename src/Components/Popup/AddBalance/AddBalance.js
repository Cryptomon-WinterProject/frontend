import React from "react";
import styles from "./AddBalance.module.css";
import cross from "../../../Assets/AddAuction/cross_black.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";

function AddBalance() {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.PopupWrapper}>
        <div className={styles.Topbar}>
          <div className={styles.Logo}>
            <span className={styles.yellow}>ADD </span>MONCOIN
          </div>
          <img src={cross} alt="" className={styles.cross} />
        </div>
        <div className={styles.BodyWrapper}>
          <div className={styles.Heading}>
            Conversion rate :{" "}
            <span className={styles.yellow}>1000 GWEI/moncoin</span>
          </div>
          <div className={styles.Heading}>
          <div className={styles.SubHeading}>Balance to add : </div><div className={styles.Button}>45
            <img src={moncoin} alt="" className={styles.moncoin} /></div>
          </div>

          <div className={styles.FinalButton}>
            Pay 4500 GWEI
            <img src={moncoin} alt="" className={styles.moncoin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBalance;
