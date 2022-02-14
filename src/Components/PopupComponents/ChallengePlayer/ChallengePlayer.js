import React, { useEffect, useState } from "react";
import styles from "./ChallengePlayer.module.css";
import cancelButton from "../../../Assets/General/Cross.svg";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";
import data from "../../BattlePage/staticData";
import PokemonCards from "./../../BattlePage/RightContainer/PokemonCards";
import { useDispatch, useSelector } from "react-redux";
import { getUserCards } from "../../../Services/user.service";
import { calculateReadyTime } from "../../../Utils/helper/calculateReadyTime";

function ChallengePlayer({ opponentData }) {
  const [cryptomonSelected, setCryptomonSelected] = useState([]);
  const [opponentCryptomons, setOpponentCryptomons] = useState([]);
  const myMonCards = useSelector((state) => state.userReducer.monCards);
  const contract = useSelector((state) => state.contractReducer.contract);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (opponentData.address && contract) {
      const opponentCryptomonCards = await getUserCards(
        contract,
        opponentData.address
      );
      setOpponentCryptomons(opponentCryptomonCards);
    }
  }, [opponentData]);

  const opponentCryptomonList = opponentCryptomons.map((cryptomon, index) => {
    if (calculateReadyTime(cryptomon.readyTime) > 0) {
      return;
    }
    return (
      <PokemonCards
        key={index}
        monProfile={cryptomon.monImageUrl}
        monName={cryptomon.monName}
        monLevel={cryptomon.monLevel}
        starLevelProfile={StarLevel}
      />
    );
  });

  const myCryptomonList = myMonCards.map((cryptomon, index) => {
    if (calculateReadyTime(cryptomon.readyTime) > 0) {
      return;
    }
    let isCryptomonSelected = cryptomonSelected.includes(index);
    let selectedIndex = cryptomonSelected.indexOf(index);
    return (
      <div
        className={styles.MyCryptomonListWrapper}
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
          {selectedIndex + 1}
        </div>
        <PokemonCards
          key={index}
          monProfile={cryptomon.monImageUrl}
          monName={cryptomon.monName}
          monLevel={cryptomon.monLevel}
          starLevelProfile={StarLevel}
        />
      </div>
    );
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.HeadingWrapper}>
        <div className={styles.Heading}>
          <span className={styles.YellowPrimary}>Challenge</span>{" "}
          <span className={styles.BlackPrimary}>Player</span>
        </div>
        <img
          src={cancelButton}
          alt="cross"
          onClick={() => {
            dispatch({ type: "HANDLE_POPUP_OPEN", popupOpen: false });
          }}
        />
      </div>
      <div className={styles.OpponentDetailsWrapper}>
        <div className={styles.OpponentDetailsHeading}>
          <span className={styles.YellowPrimary}>Opponent</span>{" "}
          <span className={styles.BlackPrimary}>Details</span>
        </div>
        <div
          className={styles.OpponentCardDetails}
          // onWheel={(ev) => {
          //   ev.preventDefault();
          //   document.getElementsByClassName(
          //     `${styles.OpponentCardDetails}`
          //   )[0].scrollLeft += ev.deltaY + ev.deltaX;

          // }}
        >
          <div className={styles.OpponentCardDetailsLeft}>
            <div className={styles.UpperWrapper}>
              <img
                src={opponentData.profilePictureURL}
                alt="data.challengeOnline[0]"
                className={styles.ChallengeProfile}
              />
              <div className={styles.MonLevelXPWrapper2}>
                <img
                  src={data.challengeOnline[0].starLevelProfile}
                  alt="star-level"
                  className={styles.StarLevel}
                />
                <p className={styles.MonLevel}>{opponentData.level}</p>
              </div>
            </div>
            <p className={styles.ParaName}>{opponentData.name}</p>
          </div>
          <div className={styles.OpponentCardDetailsRight}>
            <div className={styles.OpponentDetailsHeading}>
              <span className={styles.YellowPrimary}>Opponent</span>{" "}
              <span className={styles.BlackPrimary}>Cryptomon</span>
            </div>
            <div className={styles.OpponentCryptomonList}>
              {opponentCryptomonList}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.LowerWrapperWrapper}>
        <div className={styles.OpponentDetailsHeading}>
          <span className={styles.YellowPrimary}>Select Your</span>{" "}
          <span className={styles.BlackPrimary}>Battling Cryptomon</span>
        </div>
        <div className={styles.OpponentCryptomonList2}>{myCryptomonList}</div>
        <button className={styles.LowerWrapperWrapperButton}>Challenge</button>
      </div>
    </div>
  );
}

export default ChallengePlayer;
