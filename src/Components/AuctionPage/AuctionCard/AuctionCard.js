import React from "react";
import styles from "./AuctionCard.module.css";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";
import MonCoin from "../../../Assets/LandingPage/M-moncoin.svg";
import { useDispatch, useSelector } from "react-redux";
import PlaceBid from "../../PopupComponents/PlaceBid";

function AuctionCard({ cardData }) {
  const account = useSelector((state) => state.contractReducer.account);
  const dispatch = useDispatch();

  return (
    <div className={styles.CryptomonCardWrapper}>
      <img
        src={cardData.monImageUrl}
        alt="Pokemon"
        className={styles.MonProfile}
      />
      <p className={styles.MonName}>{cardData.monName}</p>
      <div className={styles.ProgressBarWrapper}>
        <div style={{ width: "100%" }}>
          <div className={styles.ProgressBarBorder}>
            <div
              className={styles.ProgressBarFill}
              style={{
                width: `${
                  (cardData.XP / (80 + cardData.monLevel * 20)) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className={styles.MonXP}>
            {cardData.XP}/{80 + cardData.monLevel * 20} XP
          </p>
        </div>
        <div className={styles.MonLevelWrapper}>
          <p className={styles.MonLevel}>{cardData.monLevel}</p>
          <img src={StarLevel} alt="Star Level" />
        </div>
      </div>
      <div className={styles.BidBoxWrapper}>
        <div className={styles.BidBoxLeftWrapper}>
          <p className={styles.BidBoxLeftContent}>Bid starts from </p>
          <p className={styles.BidBoxLeftNumber}>{cardData.minAmount}</p>
          <img
            src={MonCoin}
            className={styles.BidBoxLeftImage}
            alt="Mon Coin"
          />
        </div>
        <div className={styles.BidBoxRightWrapper}>
          <p className={styles.BidBoxRightContent}>Highest bid of</p>
          <p className={styles.BidBoxRightNumber}>{cardData.highestBid}</p>
          <img
            src={MonCoin}
            className={styles.BidBoxRightImage}
            alt="Mon Coin"
          />
        </div>
      </div>
      <button
        className={styles.BidButton}
        onClick={() => {
          if (cardData.owner === account) {
            return;
          }
          dispatch({
            type: "HANDLE_POPUP_COMPONENT_RENDER",
            popupComponent: <PlaceBid cardData={cardData} />,
          });
          dispatch({
            type: "HANDLE_POPUP_OPEN",
            popupOpen: true,
          });
        }}
      >
        place bid
      </button>
    </div>
  );
}

export default AuctionCard;
