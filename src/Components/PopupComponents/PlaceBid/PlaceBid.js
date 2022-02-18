import React, { useRef, useState } from "react";
import styles from "./PlaceBid.module.css";
import logo from "../../../Assets/PlaceBid/logo.svg";
import cross from "../../../Assets/General/Cross.svg";
import poke from "../../../Assets/PlaceBid/poke.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";
import StarLevel from "../../../Assets/PlaceBid/StarLevel.svg";
import RatingBar from "../../../Assets/PlaceBid/RatingBar.svg";
import { useDispatch, useSelector } from "react-redux";
import { bid } from "../../../Services/auction.service";

function PlaceBid({ cardData }) {
  const [bidAmount, setBidAmount] = useState(0);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account) {
      await bid(contract, account, cardData.auctionCardId, bidAmount);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.PopupBg}>
      <div className={styles.MainWrapper}>
        <div className={styles.Header}>
          <div className={styles.Heading}>
            <span className={styles.YellowPrimary}>Place Bid</span>{" "}
            <span className={styles.BlackPrimary}>Result</span>
          </div>
          <img
            src={cross}
            alt="cross"
            className={styles.cross}
            onClick={() => {
              dispatch({ type: "HANDLE_POPUP_OPEN", popupOpen: false });
            }}
          ></img>
        </div>
        <div className={styles.ImageWrapper}>
          <img src={cardData.monImageUrl} alt="" className={styles.PokeImg} />
        </div>

        <div className={styles.DescriptionWrapper}>
          <div className={styles.ProfileContainer}>
            <div className={styles.Name}>{cardData.monName}</div>
            <div className={styles.Profile}>
              <img
                src={cardData.ownerImageUrl}
                alt="profile"
                className={styles.ProfilePic}
              ></img>
              <div className={styles.Owner}>{cardData.ownerName}</div>
            </div>
          </div>

          <div className={styles.ProgressBarWrapper}>
            <div className={styles.MonLevelWrapper}>
              <p className={styles.MonLevel}>{cardData.monLevel}</p>
              <img src={StarLevel} alt="Star Level" />
            </div>
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
          </div>

          <div className={styles.ButtonContainer}>
            <div className={styles.Button}>
              <div className={styles.ButtonHead}>Bid Starts From</div>
              <div className={styles.ButtonBody}>
                <span className={styles.bold}>{cardData.minAmount}</span>
                <img src={moncoin} alt="moncoin" className={styles.moncoin} />
              </div>
            </div>

            <div className={styles.Button}>
              <div className={styles.ButtonHead}>Highest Bid</div>
              <div className={styles.ButtonBody}>
                <span className={styles.bold}>{cardData.highestBid}</span>
                <img src={moncoin} alt="moncoin" className={styles.moncoin} />
              </div>
            </div>
          </div>

          <div className={styles.Amount}>
            Your Previous Bid Amount : <b>{cardData.previousBid}</b>
          </div>

          <div className={styles.BidContainer}>
            <div className={styles.BidHeading}>Bid Amount</div>
            <div className={styles.BidButton}>
              <input type="number" defaultValue={0} onChange={handleChange} />
              <img src={moncoin} alt="" className={styles.moncoin} />
            </div>
          </div>

          <button className={styles.Button2}>
            Place Bid and Pay{" "}
            <span className={styles.bold}>{bidAmount ? bidAmount : 0}</span>
            <img src={moncoin} alt="moncoin" className={styles.moncoin} />
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceBid;
