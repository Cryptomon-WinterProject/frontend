import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ChallengeResult.module.css";
import cancelButton from "../../../Assets/General/Cross.svg";
import FightIcon from "../../../Assets/ChallengeResult/FightIcon.svg";
import notify from "./../../../Utils/helper/notifyToast";
import { getBalltingMonsData } from "../../../Services/battle.service";

const colors = {
  winnerColor: "#0FB900",
  loseColor: "#FF1C1C",
};

function ChallengeResult({ challengeHash, blockNumber }) {
  const dispatch = useDispatch();
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);

  const [roundWiseData, setRoundWiseData] = useState([]);
  const [battlingMonsData, setBattlingMonsData] = useState({
    challengerMons: [],
    opponentMons: [],
  });
  const [overallWinner, setOverallWinner] = useState(null);

  useEffect(() => {
    let roundWiseDataLocale = [];
    let eventListener;

    try {
      eventListener = contract.events.AnnounceRoundWinner(
        { filter: { challengeHash: challengeHash }, fromBlock: blockNumber },
        (err, event) => {
          if (err) {
            console.log(err);
          } else {
            const roundData = {
              challengeHash: event.returnValues._challengeHash,
              winner: event.returnValues._winner,
              xpGained: event.returnValues._xpGained,
              roundNumber: event.returnValues._roundNumber,
            };
            // roundWiseDataLocale[roundData.roundNumber] = roundData;
            roundWiseDataLocale.push(roundData);
            setRoundWiseData(roundWiseDataLocale);
            if (roundWiseDataLocale.length === 3) {
              eventListener.unsubscribe();
              const overallWinnerListener = contract.events.AnnounceWinner(
                {
                  filter: { challengeHash: challengeHash },
                  fromBlock: event.blockNumber,
                },
                (err, event) => {
                  if (err) {
                    console.log(err);
                  } else {
                    overallWinnerListener.unsubscribe();
                    const winnerData = {
                      challengeHash: event.returnValues._challengeHash,
                      winner: event.returnValues._winner,
                      increasedMoncoins: event.returnValues.increasedMoncoins,
                    };
                    setOverallWinner(winnerData);

                    getBalltingMonsData(contract, account, challengeHash).then(
                      (res) => {
                        setBattlingMonsData({
                          challengerMons: res.challengerMons,
                          opponentMons: res.opponentMons,
                        });
                      }
                    );
                  }
                }
              );
            }
          }
        }
      );
    } catch (err) {
      console.log(err);
      notify(err.message, "error");
    }

    return () => {
      eventListener.unsubscribe();
    };
  }, [challengeHash]);

  const roundsList = roundWiseData.map((round, index) => {
    return (
      <div className={styles.RoundWrapper} key={index}>
        <h2 className={styles.RoundNumber}>Round {index + 1}</h2>
        {battlingMonsData.challengerMons[index] && (
          <div className={styles.RoundResultWrapper}>
            <div className={styles.PokemonsDetails}>
              <img
                src={battlingMonsData.challengerMons[index].monImageUrl}
                alt="pokemon"
              />
              <img src={FightIcon} alt="pokemon" />
              <img
                src={battlingMonsData.opponentMons[index].monImageUrl}
                alt="pokemon"
              />
            </div>
            <div className={styles.FinalResultWrapper}>
              <div className={styles.ResultWrapper}>
                <div
                  style={
                    round.winner === account
                      ? {
                          borderColor: colors.winnerColor,
                          color: colors.winnerColor,
                        }
                      : {
                          borderColor: colors.loseColor,
                          color: colors.loseColor,
                        }
                  }
                >
                  {round.winner === account ? "Winner" : "Loser"}
                </div>
                <div className={styles.ResultWrapperXP}>
                  XP : {round.xpGained}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });

  const winnerDotsResult = roundWiseData.map((round, index) => {
    return (
      <div
        key={index}
        className={styles.ResultDot}
        style={
          round.winner === account
            ? { backgroundColor: colors.winnerColor }
            : { backgroundColor: colors.loseColor }
        }
      ></div>
    );
  });

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.HeadingWrapper}>
          <div className={styles.Heading}>
            <span className={styles.YellowPrimary}>Challenge</span>{" "}
            <span className={styles.BlackPrimary}>Result</span>
          </div>
          <img
            src={cancelButton}
            alt="cross"
            onClick={() => {
              dispatch({ type: "HANDLE_POPUP_OPEN", popupOpen: false });
            }}
          />
        </div>
        {overallWinner &&
        roundWiseData.length === 3 &&
        battlingMonsData.challengerMons.length === 3 &&
        battlingMonsData.opponentMons.length === 3 ? (
          <>
            <div>{roundsList}</div>
            <div className={styles.LowerContainer}>
              <h2 className={styles.RoundNumber} id={styles.RoundNumberOverall}>
                Overall Result
              </h2>
              <div className={styles.ResultDotsWrapper}>{winnerDotsResult}</div>
              <div
                style={{
                  backgroundColor:
                    overallWinner.winner === account
                      ? colors.winnerColor
                      : colors.loseColor,
                }}
                className={styles.OverallResultText}
                onClick={() => {
                  dispatch({ type: "HANDLE_POPUP_OPEN", popupOpen: false });
                }}
              >
                {overallWinner.winner === account ? "You Won" : "You Lose"}
              </div>
              {overallWinner.winner === account && (
                <div className={styles.OverallResultXP}>
                  You received {overallWinner.increasedMoncoins} moncoin(s)
                </div>
              )}
            </div>
          </>
        ) : (
          <>{/* Preloder */}</>
        )}
      </div>
    </>
  );
}

export default ChallengeResult;
