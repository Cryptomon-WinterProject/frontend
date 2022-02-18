export const getMonCollection = async (contract, index) => {
  try {
    const monCollection = await contract.methods.getMonCollection(index).call();
    return monCollection;
  } catch (err) {
    throw err;
  }
};

export const getUserCardIds = async (contract, account) => {
  try {
    const monCardIds = await contract.methods
      .getUserCards()
      .call({ from: account });
    return monCardIds;
  } catch (err) {
    throw err;
  }
};

export const getUserCards = async (contract, account) => {
  try {
    const monCardIds = await getUserCardIds(contract, account);
    const dataToReturn = [];

    for (let i = 0; i < monCardIds.length; i++) {
      let localObj = {};
      const monCard = await contract.methods
        .getCryptomonCard(monCardIds[i])
        .call();
      let keys = Object.keys(monCard);
      for (let j = 6; j < keys.length; j++) {
        localObj[keys[j]] = monCard[keys[j]];
      }
      const monCollection = await getMonCollection(contract, localObj.monIndex);
      localObj.monImageUrl = monCollection.images[localObj.evolution - 1];
      localObj.monName = monCollection.names[localObj.evolution - 1];
      localObj.monId = monCardIds[i];
      localObj.trainingGainPerHour = monCollection.trainingGainPerHour;
      dataToReturn.push(localObj);
    }
    return dataToReturn;
  } catch (err) {
    throw err;
  }
};

export const getUserData = async (contract, account) => {
  try {
    const userData = await contract.methods.users(account).call();
    return userData;
  } catch (err) {
    throw err;
  }
};

export const addBalance = async (contract, account, amount) => {
  try {
    const receipt = await contract.methods
      .buyMonCoins()
      .send({ from: account, value: amount });
    return receipt;
  } catch (err) {
    throw err;
  }
};
