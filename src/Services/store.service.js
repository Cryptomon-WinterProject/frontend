import { getMonCollection } from "./user.service";

export const getStoreCards = async (contract, account) => {
  try {
    const numOfCards = await contract.methods.getMonCollectionCount().call();
    const dataToReturn = [];

    for (let i = 0; i < numOfCards; i++) {
      let localObj = {};
      const monCollection = await getMonCollection(contract, i);
      localObj.image = monCollection.images[0];
      localObj.name = monCollection.names[0];
      localObj.price = monCollection.price;
      localObj.monIndex = i;
      dataToReturn.push(localObj);
    }
    return dataToReturn;
  } catch (err) {
    console.log(err);
  }
};

export const buyMonCard = async (contract, account, monIndex, amount) => {
  try {
    await contract.methods
      .buyCryptomons(monIndex, amount)
      .send({ from: account });
  } catch (err) {
    console.log(err);
  }
};
