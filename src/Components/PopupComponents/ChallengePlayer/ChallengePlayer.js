import React from "react";
import styles from "./ChallengePlayer.module.css";
import cancelButton from "../../../Assets/General/Cross.svg";
import data from "../../BattlePage/staticData";

function ChallengePlayer() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.HeadingWrapper}>
        <div className={styles.Heading}>
          <span className={styles.YellowPrimary}>Challenge</span>{" "}
          <span className={styles.BlackPrimary}>Player</span>
        </div>
        <img src={cancelButton} alt="cross" />
      </div>
      <div className={styles.OpponentDetailsWrapper}>
        <div className={styles.OpponentDetailsHeading}>
          <span className={styles.YellowPrimary}>Opponent</span>{" "}
          <span className={styles.BlackPrimary}>Details</span>
        </div>
        <div className={styles.OpponentCardDetails}>
          <div className={styles.OpponentCardDetailsLeft}>
            <div className={styles.UpperWrapper}>
              <img
                src={data.challengeOnline[0].chalProfile}
                alt="data.challengeOnline[0]"
                className={styles.ChallengeProfile}
              />
              <div className={styles.MonLevelXPWrapper2}>
                <img
                  src={data.challengeOnline[0].starLevelProfile}
                  alt="star-level"
                  className={styles.StarLevel}
                />
                <p className={styles.MonLevel}>
                  {data.challengeOnline[0].chalXP}
                </p>
              </div>
            </div>
            <p>Name</p>
          </div>
          <div className={styles.OpponentCardDetailsRight}></div>
        </div>
      </div>
    </div>
  );
}

export default ChallengePlayer;
