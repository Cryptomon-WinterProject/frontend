import React, { useEffect, useState } from "react";
import styles from "./LowerSection.module.css";
import AuctionCard from "../AuctionCard";
import { useSelector } from "react-redux";
import { fetchAuctionCards } from "../../../Services/auction.service";

const LowerSection = () => {
  const [auctionCards, setAuctionCards] = useState([]);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);

  useEffect(async () => {
    if (account) {
      const auctionCards = await fetchAuctionCards(contract, account);
      setAuctionCards(auctionCards);
    }
  }, [account]);

  const auctionCardList = auctionCards.map((auctionCard, index) => {
    return <AuctionCard key={index} cardData={auctionCard} />;
  });

  return (
    <div className={styles.LowerSectionWrapper}>
      <div className={styles.Heading}>Active Auctions</div>
      <div className={styles.Cards}>{auctionCardList}</div>
    </div>
  );
};

export default LowerSection;
