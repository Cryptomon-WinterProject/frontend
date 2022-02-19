export const trainCryptomon = async (
  contract,
  account,
  cryptomonId,
  duration,
  charge
) => {
  try {
    await contract.methods.trainCryptomon(cryptomonId, duration, charge).send({
      from: account,
    });
  } catch (err) {
    console.log(err);
  }
};
