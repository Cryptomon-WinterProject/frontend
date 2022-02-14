import React from "react";
import styles from "./PlaceBid.module.css";
import logo from "../../../Assets/PlaceBid/logo.svg";
import cross from "../../../Assets/PlaceBid/cross.svg";
import poke from "../../../Assets/PlaceBid/poke.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";
import StarLevel from "../../../Assets/PlaceBid/StarLevel.svg";
import RatingBar from "../../../Assets/PlaceBid/RatingBar.svg";
import { useDispatch } from "react-redux";

function PlaceBid() {
  const dispatch = useDispatch();

  return (
    <div className={styles.PopupBg}>
      <div className={styles.MainWrapper}>
        <div className={styles.ImageWrapper}>
          <img src={poke} alt="" className={styles.PokeImg} />
        </div>

        <div className={styles.Header}>
          <img src={logo} alt="" className={styles.logo}></img>
          <img
            src={cross}
            alt=""
            className={styles.cross}
            onClick={() => {
              dispatch({ type: "HANDLE_POPUP_OPEN", popupOpen: false });
            }}
          ></img>
        </div>

        <div className={styles.DescriptionWrapper}>
          <div className={styles.ProfileContainer}>
            <div className={styles.Name}>Pichu</div>
            <div className={styles.Profile}>
              <img src={poke} alt="" className={styles.ProfilePic}></img>
              <div className={styles.Owner}>Suar Varsani</div>
            </div>
          </div>

          <div className={styles.LevelWrapper}>
            <img src={StarLevel} alt="" className={styles.StarLevel} />
            <div className={styles.RatingWrapper}>
              <img src={RatingBar} alt="" className={styles.RatingBar} />
              <div className={styles.Rating}>180/3000 XP</div>
            </div>
          </div>

          <div className={styles.ButtonContainer}>
            <div className={styles.Button}>
              <div className={styles.ButtonHead}>Bid Starts From</div>
              <div className={styles.ButtonBody}>
                <span className={styles.bold}>50</span>
                <img src={moncoin} alt="" className={styles.moncoin} />
              </div>
            </div>

            <div className={styles.Button}>
              <div className={styles.ButtonHead}>Highest Bid</div>
              <div className={styles.ButtonBody}>
                <span className={styles.bold}>50</span>
                <img src={moncoin} alt="" className={styles.moncoin} />
              </div>
            </div>
          </div>

          <div className={styles.Amount}>
            Your Previous Bid Amount : <b>60</b>
          </div>

          <div className={styles.BidContainer}>
            <div className={styles.BidHeading}>Bid Amount</div>
            <div className={styles.BidButton}>
              120 <img src={moncoin} alt="" className={styles.moncoin} />
            </div>
          </div>

          <div className={styles.Button2}>
            Place Bid and Pay <span className={styles.bold}>50</span>
            <img src={moncoin} alt="" className={styles.moncoin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceBid;
