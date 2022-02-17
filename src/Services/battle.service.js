import { getUserData } from "./user.service";

export const getPlayerData = async (contract, account) => {
  try {
    let localObj = {};
    const player = await getUserData(contract, account);
    let keys = Object.keys(player);
    for (let j = 11; j < keys.length; j++) {
      localObj[keys[j]] = player[keys[j]];
    }
    localObj.address = account;
    return localObj;
  } catch (err) {
    throw err;
  }
};

export const getOnlinePlayers = async (contract) => {
  try {
    const onlinePlayers = await contract.methods.getOnlinePlayers().call();
    console.log(onlinePlayers);
    return onlinePlayers;
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
