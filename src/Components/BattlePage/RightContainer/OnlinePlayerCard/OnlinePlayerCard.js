import React, { useEffect } from "react";

import styles from "./OnlinePlayerCard.module.css";

import starLevel from "../../../../Assets/LandingPage/StarLevel.svg";
import { useSelector } from "react-redux";
import { getPlayerData } from "../../../../Services/battle.service";
import CustomPreloader from "../../../PreLoader/CustomPreloader";

function OnlinePlayerCard({ playerAddress, handleClick }) {
  const [playerData, setPlayerData] = React.useState({});
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const [loading, setLoading] = React.useState(true);

  useEffect(async () => {
    if (account && playerAddress) {
      const onlinePlayerData = await getPlayerData(contract, playerAddress);
      setPlayerData(onlinePlayerData);
      setLoading(false);
    }
  }, [account]);

  return (
    <>
      {loading ? (
        <CustomPreloader />
      ) : (
        <div className={styles.ChallengeCardWrapper}>
          <div className={styles.UpperWrapper}>
            <img
              src={playerData.profilePictureURL}
              alt="challenge"
              className={styles.chalProfile}
            />
            <div className={styles.MonLevelXPWrapper2}>
              <img
                src={starLevel}
                alt="star-level"
                className={styles.StarLevel}
              />
              <p className={styles.MonLevel}>{playerData.level}</p>
            </div>
          </div>
          <div className={styles.LowerContainerWrapper2}>
            <p className={styles.chalName}>{playerData.name}</p>
            <button onClick={() => handleClick(playerData)}>Challenge</button>
          </div>
        </div>
      )}
    </>
  );
}

export default OnlinePlayerCard;
