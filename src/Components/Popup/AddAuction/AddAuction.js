import React, { useRef, useState } from "react";
import styles from "./AddAuction.module.css";
import cross from "../../../Assets/AddAuction/cross_black.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";
import { useDispatch, useSelector } from "react-redux";
import PokemonCards from "../../BattlePage/RightContainer/PokemonCards";
import starLevel from "../../../Assets/LandingPage/StarLevel.svg";
import selectedMark from "../../../Assets/AddAuction/selectedMark.svg";
import { addToAuction } from "../../../Services/auction.service";
import { calculateReadyTime } from "../../../Utils/helper/calculateReadyTime";

function AddAuction() {
  const inputRef = useRef(null);
  const myMonCards = useSelector((state) => state.userReducer.monCards);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const dispatch = useDispatch();
  const [cryptomonSelected, setCryptomonSelected] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const minAmount = inputRef.current.value;
    await addToAuction(contract, account, cryptomonSelected, minAmount);
  };

  const myCryptomonList = myMonCards.map((cryptomon, index) => {
    if (calculateReadyTime(cryptomon.readyTime) > 0) {
      return;
    }
    return (
      <div
        className={styles.MyCryptomonListWrapper}
        key={index}
        onClick={() => {
          setCryptomonSelected(index);
        }}
      >
        <div
          className={styles.MyCryptomonListSubWrapper}
          style={
            cryptomonSelected === index
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <img src={selectedMark} alt="mark" />
        </div>
        <PokemonCards
          key={index}
          monProfile={cryptomon.monImageUrl}
          monName={cryptomon.monName}
          monLevel={cryptomon.monLevel}
          starLevelProfile={starLevel}
        />
      </div>
    );
  });
  return (
    <form onSubmit={handleSubmit} className={styles.MainWrapper}>
      <div className={styles.PopupWrapper}>
        <div className={styles.Topbar}>
          <div className={styles.Logo}>
            <span className={styles.yellow}>Sell</span> <span>Cryptomon</span>
          </div>
          <img
            src={cross}
            alt=""
            className={styles.cross}
            onClick={() => {
              dispatch({ type: "HANDLE_POPUP_OPEN", popupOpen: false });
            }}
          />
        </div>
        <div className={styles.BodyWrapper}>
          <div className={styles.Heading}>
            <span className={styles.yellow}>SELECT CRYPTOMONS</span> FOR AUCTION
          </div>
          <div className={styles.CardContainer}>{myCryptomonList}</div>
          <div className={styles.InfoWrapper}>
            <div className={styles.Info}>
              <div className={styles.InfoHead}>Minimum Bid Price</div>
              <div className={styles.InfoDesc}> (Non Zero) </div>
            </div>
            <div className={styles.InfoButton}>
              <input type="number" defaultValue={50} ref={inputRef} />{" "}
              <img src={moncoin} alt="" className={styles.moncoin} />
            </div>
          </div>
          <button className={styles.FinalButton}>Sell Cryptomon</button>
        </div>
      </div>
    </form>
  );
}

export default AddAuction;
