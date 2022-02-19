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
    console.log(err);
  }
};

export const getOnlinePlayers = async (contract) => {
  try {
    const onlinePlayers = await contract.methods.getOnlinePlayers().call();
    return onlinePlayers;
  } catch (err) {
    console.log(err);
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
    console.log(err);
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
    console.log(err);
  }
};

export const checkChallangeStatus = async (
  contract,
  account,
  challengerAddress
) => {
  try {
    const challengeStatus = await contract.methods
      .challengeStatus(challengerAddress)
      .call({ from: account });
    return challengeStatus;
  } catch (err) {
    console.log(err);
  }
};
