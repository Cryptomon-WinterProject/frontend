export const trainCryptomon = async (
  contract,
  account,
  cryptomonId,
  duration,
  charge
) => {
  try {
    const receipt = await contract.methods
      .trainCryptomon(cryptomonId, duration, charge)
      .send({
        from: account,
      });
    console.log(receipt);
  } catch (err) {
    throw err;
  }
};
