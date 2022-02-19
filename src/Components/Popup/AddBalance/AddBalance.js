import React, { useState } from "react";
import styles from "./AddBalance.module.css";
import cross from "../../../Assets/AddAuction/cross_black.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";
import { useDispatch, useSelector } from "react-redux";
import { addBalance } from "../../../Services/user.service";

function AddBalance() {
  const [balanceToAdd, setBalanceToAdd] = useState(4);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBalanceToAdd(e.target.value);
  };

  const handleAddBalance = async (e) => {
    e.preventDefault();
    await addBalance(contract, account, Math.pow(10, 12) * balanceToAdd);
    dispatch({
      type: "HANDLE_POPUP_OPEN",
      popupOpen: false,
    });
  };

  return (
    <form className={styles.MainWrapper} onSubmit={handleAddBalance}>
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
              <input
                type="number"
                defaultValue={4}
                placeholder="Amount"
                onChange={handleChange}
              />
              <img src={moncoin} alt="" className={styles.moncoin} />
            </div>
          </div>

          <button className={styles.FinalButton}>
            Pay {balanceToAdd * 1000} GWEI
            <img src={moncoin} alt="" className={styles.moncoin} />
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddBalance;
