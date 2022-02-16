import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ChallengeResult.module.css";
import cancelButton from "../../../Assets/General/Cross.svg";
import { data } from "./staticData";
import FightIcon from "../../../Assets/ChallengeResult/FightIcon.svg";

const colors = {
  winnerColor: "#0FB900",
  loseColor: "#FF1C1C",
};

function ChallengeResult() {
  const dispatch = useDispatch();
  const winnerDots = [true, true, false];
  const isOverallWinner = data.overallWinner;
  const roundsList = data.rounds.map((round, index) => {
    return (
      <div className={styles.RoundWrapper} key={index}>
        <h2 className={styles.RoundNumber}>Round {index + 1}</h2>
        {round.myCard && (
          <div className={styles.RoundResultWrapper}>
            <div className={styles.PokemonsDetails}>
              <img src={round.myCard} alt="pokemon" />
              <img src={FightIcon} alt="pokemon" />
              <img src={round.opponentCard} alt="pokemon" />
            </div>
            <div className={styles.FinalResultWrapper}>
              <div className={styles.ResultWrapper}>
                <div
                  style={
                    round.isWinner
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
                  {round.isWinner ? "Winner" : "Loser"}
                </div>
                <div className={styles.ResultWrapperXP}>
                  XP : {round.xpIncrease}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });

  const winnerDotsResult = winnerDots.map((dot, index) => {
    return (
      <div
        key={index}
        className={styles.ResultDot}
        style={
          dot
            ? { backgroundColor: colors.winnerColor }
            : { backgroundColor: colors.loseColor }
        }
      ></div>
    );
  });

  return (
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
      <div>{roundsList}</div>
      <div className={styles.LowerContainer}>
        <h2 className={styles.RoundNumber} id={styles.RoundNumberOverall}>
          Overall Result
        </h2>
        <div className={styles.ResultDotsWrapper}>{winnerDotsResult}</div>
        <div
          style={{
            backgroundColor: isOverallWinner
              ? colors.winnerColor
              : colors.loseColor,
          }}
          className={styles.OverallResultText}
        >
          {isOverallWinner ? "You Won" : "You Lose"}
        </div>
        <div className={styles.OverallResultXP}>
          {data.overallXpIncrease} XP
        </div>
      </div>
    </div>
  );
}

export default ChallengeResult;
