import pokemon from "../../Assets/LandingPage/Pokemon.png";
import starLevel from "../../Assets/LandingPage/StarLevel.svg";
import challengeAsset from "../../Assets/General/challengeAsset.svg";

let tempArr = [];
let challengeArr = [];
for (let i = 0; i < 5; i++) {
  tempArr.push({
    monProfile: pokemon,
    monName: "Pichu",
    monXP: 15,
    starLevelProfile: starLevel,
  });
}
for (let i = 0; i < 10; i++) {
  challengeArr.push({
    chalProfile: challengeAsset,
    chalName: "Jocyln Curtis",
    chalXP: 55,
    starLevelProfile: starLevel,
  });
}

const data = {
  heading: ["Your available cryptomons", "online Players"],
  cryptomonCards: tempArr,
  challengeOnline: challengeArr,
};

export default data;
