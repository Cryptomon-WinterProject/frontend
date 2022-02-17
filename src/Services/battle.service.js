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
