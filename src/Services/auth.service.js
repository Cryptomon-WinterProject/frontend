export const logInUser = async (name, imageUrl, contract, account) => {
  try {
    const receipt = await contract.methods
      .createUser(name, imageUrl, [0, 1, 2, 3, 4])
      .send({ from: account });
    console.log(receipt);
  } catch (err) {
    throw err;
  }
};
