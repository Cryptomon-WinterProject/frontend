import React, { useEffect, useState } from "react";
import styles from "./LowerSection.module.css";
import AuctionCard from "../AuctionCard";
import { useSelector } from "react-redux";
import { fetchAuctionCards } from "../../../Services/auction.service";
import CustomPreloader from "./../../PreLoader/CustomPreloader/index";

const LowerSection = () => {
  const [auctionCards, setAuctionCards] = useState([]);
  const contract = useSelector((state) => state.contractReducer.contract);
  const account = useSelector((state) => state.contractReducer.account);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (account) {
      const auctionCards = await fetchAuctionCards(contract, account);
      setAuctionCards(auctionCards);
      setLoading(false);
    }
  }, [account]);

  const auctionCardList = auctionCards
    .filter((card) => card.isSold === false)
    .map((auctionCard, index) => {
      return <AuctionCard key={index} cardData={auctionCard} />;
    });

  return (
    <div className={styles.LowerSectionWrapper}>
      <div className={styles.Heading}>Active Auctions</div>
      <div className={styles.Cards}>
        {loading ? <CustomPreloader /> : auctionCardList}
      </div>
    </div>
  );
};

export default LowerSection;
