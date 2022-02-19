import React, { useEffect, useState } from "react";
import styles from "./AcceptChallenge.module.css";
import cancelButton from "../../../Assets/General/Cross.svg";
import StarLevel from "../../../Assets/LandingPage/StarLevel.svg";
import data from "../../BattlePage/staticData";
import PokemonCards from "../../BattlePage/RightContainer/PokemonCards";
import { useDispatch, useSelector } from "react-redux";
import { getmonCardsDataByIds } from "../../../Services/user.service";
import { calculateReadyTime } from "../../../Utils/helper/calculateReadyTime";
import { acceptChallenge } from "../../../Services/battle.service";
import { HANDLE_POPUP_OPEN } from "./../../../Redux/ActionTypes";
import notify from "./../../../Utils/helper/notifyToast";

function AcceptChallenge({ opponentData, battlingMonIds }) {
  const [cryptomonSelected, setCryptomonSelected] = useState([]);
  const [opponentCryptomons, setOpponentCryptomons] = useState([]);

  const myMonCards = useSelector((state) => state.userReducer.monCards);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const dispatch = useDispatch();

  useEffect(async () => {
    setCryptomonSelected([]);
    setOpponentCryptomons([]);
    if (opponentData.address && contract) {
      const opponentCryptomonCards = await getmonCardsDataByIds(
        contract,
        battlingMonIds
      );
      setOpponentCryptomons(opponentCryptomonCards);
    }
  }, [opponentData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cryptomonSelected.length === 3) {
      try {
        const monIds = new Array(3);

        for (let i = 0; i < cryptomonSelected.length; i++) {
          monIds[i] = myMonCards[cryptomonSelected[i]].monId;
        }
        await acceptChallenge(contract, account, opponentData.address, monIds);
        dispatch({
          type: HANDLE_POPUP_OPEN,
          popupOpen: false,
        });
        notify(
          `Accepted challenge from ${opponentData.name} successfully`,
          "success"
        );
      } catch (err) {
        console.log(err);
        notify(err.message, "error");
      }
    } else {
      notify("Please select 3 cryptomons", "error");
    }
  };

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
              notify("You can select maximum 3 cryptomons", "warning");
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
    <form className={styles.Wrapper} onSubmit={handleSubmit}>
      <div className={styles.HeadingWrapper}>
        <div className={styles.Heading}>
          <span className={styles.YellowPrimary}>Accept</span>{" "}
          <span className={styles.BlackPrimary}>Challenge</span>
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
              <span className={styles.YellowPrimary}>Battling</span>{" "}
              <span className={styles.BlackPrimary}>Cryptomons</span>
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
        <button className={styles.LowerWrapperWrapperButton}>
          Accept Challenge
        </button>
      </div>
    </form>
  );
}

export default AcceptChallenge;
