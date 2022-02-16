import React, { useState } from "react";
import styles from "./AddAuction.module.css";
import cross from "../../../Assets/AddAuction/cross_black.svg";
import moncoin from "../../../Assets/PlaceBid/moncoin.svg";
import { useSelector } from "react-redux";
import PokemonCards from "../../BattlePage/RightContainer/PokemonCards";
import starLevel from "../../../Assets/LandingPage/StarLevel.svg";
import selectedMark from "../../../Assets/AddAuction/selectedMark.svg";

function AddAuction() {
  const myMonCards = useSelector((state) => state.userReducer.monCards);
  const [cryptomonSelected, setCryptomonSelected] = useState([]);

  const myCryptomonList = myMonCards.map((cryptomon, index) => {
    let isCryptomonSelected = cryptomonSelected.includes(index);
    let selectedIndex = cryptomonSelected.indexOf(index);
    return (
      <div
        className={styles.MyCryptomonListWrapper}
        key={index}
        onClick={() => {
          let arr = [...cryptomonSelected];
          if (isCryptomonSelected) {
            arr.splice(selectedIndex, 1);
            setCryptomonSelected(arr);
          } else {
            if (cryptomonSelected.length < 3) {
              arr.push(index);
              setCryptomonSelected(arr);
            } else {
              alert("You can select maximum 3 cryptomons");
            }
          }
        }}
      >
        <div
          className={styles.MyCryptomonListSubWrapper}
          style={
            isCryptomonSelected ? { display: "flex" } : { display: "none" }
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
    <div className={styles.MainWrapper}>
      <div className={styles.PopupWrapper}>
        <div className={styles.Topbar}>
          <div className={styles.Logo}>
            <span className={styles.yellow}>Sell</span> <span>Cryptomon</span>
          </div>
          <img src={cross} alt="" className={styles.cross} />
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
