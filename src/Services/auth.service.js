export const logInUser = async (name, imageUrl, contract, account) => {
  try {
    const randArr = [];
    for (let i = 0; i < 5; i++) {
      randArr.push(Math.floor(Math.random() * 15));
    }
    const receipt = await contract.methods
      .createUser(name, imageUrl, randArr)
      .send({ from: account });
    console.log(receipt);
  } catch (err) {
    throw err;
  }
};
