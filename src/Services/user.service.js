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
    const dataToReturn = await getmonCardsDataByIds(contract, monCardIds);
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

export const getmonCardsDataByIds = async (contract, monCardIds) => {
  try {
    const dataToReturn = [];

    for (let i = 0; i < monCardIds.length; i++) {
      let localObj = await getMonCardDataById(contract, monCardIds[i]);
      dataToReturn.push(localObj);
    }
    return dataToReturn;
  } catch (err) {
    throw err;
  }
};

export const getMonCardDataById = async (contract, monCardId) => {
  try {
    const monCard = await contract.methods.getCryptomonCard(monCardId).call();
    let keys = Object.keys(monCard);
    let localObj = {};
    for (let j = 6; j < keys.length; j++) {
      localObj[keys[j]] = monCard[keys[j]];
    }
    const monCollection = await getMonCollection(contract, localObj.monIndex);
    localObj.monImageUrl = monCollection.images[localObj.evolution - 1];
    localObj.monName = monCollection.names[localObj.evolution - 1];
    localObj.monId = monCardId;
    localObj.trainingGainPerHour = monCollection.trainingGainPerHour;
    return localObj;
  } catch (err) {
    throw err;
  }
};
