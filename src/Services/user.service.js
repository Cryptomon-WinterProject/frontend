export const getMonCollection = async (contract, index) => {
  try {
    const monCollection = await contract.methods.getMonCollection(index).call();
    return monCollection;
  } catch (err) {
    throw err;
  }
};

export const getUserCards = async (contract, account) => {
  try {
    const monCards = await contract.methods
      .getUserCards()
      .call({ from: account });

    const dataToReturn = [];

    for (let i = 0; i < monCards.length; i++) {
      let localObj = {};
      let keys = Object.keys(monCards[i]);
      for (let j = 6; j < keys.length; j++) {
        localObj[keys[j]] = monCards[i][keys[j]];
      }
      const monCollection = await getMonCollection(contract, localObj.monIndex);
      localObj.monImageUrl = monCollection.images[localObj.evolution];
      localObj.monName = monCollection.names[localObj.evolution];
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
