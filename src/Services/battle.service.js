import { getUserData } from "./user.service";

export const getOnlinePlayers = async (contract, account) => {
  try {
    const addressesOfPlayers = await contract.methods.getOnlinePlayers().call();
    let addresses = [...addressesOfPlayers];
    addresses.splice(addresses.indexOf(account), 1);

    const dataToReturn = [];
    for (let i = 0; i < addresses.length; i++) {
      let localObj = {};
      const player = await getUserData(contract, addresses[i]);
      let keys = Object.keys(player);
      for (let j = 11; j < keys.length; j++) {
        localObj[keys[j]] = player[keys[j]];
      }
      localObj.address = addresses[i];
      dataToReturn.push(localObj);
    }
    return dataToReturn;
  } catch (err) {
    throw err;
  }
};

export const challangePlayer = async (
  contract,
  account,
  monIDs,
  opponentAddress
) => {
  try {
    await contract.methods
      .challenge(opponentAddress, monIDs)
      .send({ from: account });
  } catch (err) {
    throw err;
  }
};

export const acceptChallenge = async (
  contract,
  account,
  challengerAddress,
  monIDs
) => {
  try {
    await contract.methods
      .acceptChallenge(challengerAddress, monIDs)
      .send({ from: account });
  } catch (err) {
    throw err;
  }
};
