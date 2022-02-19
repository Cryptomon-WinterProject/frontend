import { getMonCollection, getUserData } from "./user.service";

export const addToAuction = async (
  contract,
  account,
  cryptomonId,
  minAmount
) => {
  try {
    const receipt = await contract.methods
      .addToAuction(cryptomonId, minAmount)
      .send({
        from: account,
      });
    console.log(receipt);
  } catch (err) {
    throw err;
  }
};

export const fetchAuctionCards = async (contract, account) => {
  try {
    const auctionCards = await contract.methods.getAuctionCard().call();
    const dataToReturn = [];
    for (let i = 0; i < auctionCards.length; i++) {
      let localObj = {};
      const monCard = await contract.methods
        .getCryptomonCard(auctionCards[i].monId)
        .call();
      let keys = Object.keys(monCard);
      for (let j = 0; j < keys.length; j++) {
        localObj[keys[j]] = monCard[keys[j]];
      }
      const monCollection = await getMonCollection(contract, localObj.monIndex);
      const ownerData = await getUserData(contract, monCard.owner);
      const lastBid = await contract.methods.monCoinBid(account, i).call();
      localObj.previousBid = lastBid;
      localObj.ownerName = ownerData.name;
      localObj.ownerImageUrl = ownerData.profilePictureURL;
      localObj.monImageUrl = monCollection.images[localObj.evolution - 1];
      localObj.monName = monCollection.names[localObj.evolution - 1];
      localObj.auctionCardId = i;
      localObj.highestBid = auctionCards[i].highestBid;
      localObj.minAmount = auctionCards[i].minAmount;
      localObj.highestBidder = auctionCards[i].highestBidder;
      dataToReturn.push(localObj);
    }
    return dataToReturn;
  } catch (err) {
    throw err;
  }
};

export const bid = async (contract, account, auctionCardId, amount) => {
  try {
    const receipt = await contract.methods.bid(auctionCardId, amount).send({
      from: account,
    });
    console.log(receipt);
  } catch (err) {
    throw err;
  }
};
