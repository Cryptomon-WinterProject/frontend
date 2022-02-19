import React from "react";
import styles from "./AddBalance.module.css";
import cross from "../../../Assets/AddAuction/cross_black.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";
import { useDispatch } from "react-redux";

function AddBalance() {
  const dispatch = useDispatch();

  return (
    <form className={styles.MainWrapper}>
      <div className={styles.PopupWrapper}>
        <div className={styles.Topbar}>
          <div className={styles.Logo}>
            <span className={styles.yellow}>ADD </span>MONCOIN
          </div>
          <img
            src={cross}
            alt="cross"
            className={styles.cross}
            onClick={() => {
              dispatch({
                type: "HANDLE_POPUP_OPEN",
                popupOpen: false,
              });
            }}
          />
        </div>
        <div className={styles.BodyWrapper}>
          <div className={styles.Heading}>
            Conversion rate :
            <span className={styles.yellow}>1000 GWEI/moncoin</span>
          </div>
          <div className={styles.Heading}>
            <div className={styles.SubHeading}>Balance to add : </div>
            <div className={styles.Button}>
              <input type="number" defaultValue={4} placeholder="Amount" />
              <img src={moncoin} alt="" className={styles.moncoin} />
            </div>
          </div>

          <button className={styles.FinalButton}>
            Pay 4500 GWEI
            <img src={moncoin} alt="" className={styles.moncoin} />
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddBalance;
