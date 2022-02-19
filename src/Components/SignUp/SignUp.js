import React, { useEffect, useRef, useState } from "react";
import styles from "./SignUp.module.css";
import CryptomomLogo from "../../Assets/General/Logo.svg";
import LoginLogo from "../../Assets/SignUpPage/defaultProfilePicture.png";
import { uploadImage } from "../../Services/photoUpload.service";
import { logInUser } from "../../Services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserData } from "../../Services/user.service";
import { getUserCards } from "./../../Services/user.service";
import { getStoreCards } from "./../../Services/store.service";
import { soliditySha3 } from "web3-utils";
import { checkChallangeStatus } from "./../../Services/battle.service";
import { getPlayerData } from "../../Services/battle.service";
import notify from "../../Utils/helper/notifyToast";
import {
  HANDLE_POPUP_COMPONENT_RENDER,
  HANDLE_POPUP_OPEN,
} from "../../Redux/ActionTypes.js";
import AcceptChallenge from "../PopupComponents/AcceptChallenge";

const SignUp = ({ setIsInitalized }) => {
  const history = useHistory();
  const addImageInputRef = useRef(null);
  const formRef = useRef(123);
  const [images, setImages] = useState([LoginLogo]);
  const account = useSelector((state) => state.contractReducer.account);
  const contract = useSelector((state) => state.contractReducer.contract);
  const userDetails = useSelector((state) => state.userReducer.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails.name) {
      history.push("/home");
    }
  }, [userDetails]);
  async function setUserData() {
    const userDetails = await getUserData(contract, account);
    const monCards = await getUserCards(contract, account);
    const storeCards = await getStoreCards(contract, account);

    contract.events.NewChallenge({ fromBlock: 0 }, async (error, event) => {
      if (error) {
        console.log("error:", error);
      } else {
        const opponent = event.returnValues._opponent;
        const challanger = event.returnValues._challenger;

        const challangeHash = soliditySha3(
          { type: "address", value: challanger },
          { type: "address", value: opponent }
        );

        const challengeStatus = await checkChallangeStatus(
          contract,
          account,
          challangeHash
        );
        console.log("challengeStatus:", challengeStatus);

        if (parseInt(challengeStatus) === 1 && opponent === account) {
          const battlingMonIds = event.returnValues._monIds;
          const challangerData = await getPlayerData(contract, challanger);

          notify(`You have a challenge from ${challangerData.name}`);

          dispatch({
            type: HANDLE_POPUP_OPEN,
            popupOpen: true,
          });
          dispatch({
            type: HANDLE_POPUP_COMPONENT_RENDER,
            popupComponent: (
              <AcceptChallenge
                opponentData={challangerData}
                battlingMonIds={battlingMonIds}
              />
            ),
          });
        }
      }
    });

    dispatch({
      type: "SET_USER_DETAILS",
      data: userDetails,
    });

    dispatch({
      type: "SET_MON_CARDS",
      data: monCards,
    });

    dispatch({
      type: "SET_STORE_CARDS",
      data: storeCards,
    });
    setIsInitalized(true);
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const name = formRef.current.elements.username.value;
    const imageUrl = images[0];
    await logInUser(name, imageUrl, contract, account);
    setUserData();
    history.push("/home");
  };

  const handleClick = async (e) => {
    const [file] = addImageInputRef.current.avatarFileInput.files;
    try {
      if (file) {
        alert("Image Uploading Succesfully", "success");
        let urls = await uploadImage(file);
        setImages(urls);
        alert("Profile picture updated successfully", "success");
      }
    } catch (err) {
      console.log(err);
      console.log(err.response);
      alert(err, "error");
    }
  };

  return (
    <div className={styles.SignUpWrapper}>
      <div className={styles.SignUpBoxWrapper}>
        <div className={styles.SignUpBoxBorder}>
          <img
            src={CryptomomLogo}
            alt="Cryptomon"
            className={styles.CryptomomLogo}
          />
          <img src={images[0]} alt="Cryptomon" className={styles.LoginLogo} />

          <div className={styles.usernameInput}>
            <form ref={formRef}>
              <input
                className={styles.UserNameInputBox}
                type="text"
                id="username"
                name="username"
                placeholder="username"
              ></input>
            </form>
          </div>

          <form
            className={styles.AvatarButtonBox}
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById("avatarFileInput").click();
            }}
            ref={addImageInputRef}
          >
            <input
              type="file"
              name="fileInput"
              id="avatarFileInput"
              style={{ display: "none" }}
              onChange={handleClick}
            />
            <button className={styles.AvatarButton}>
              Avatar<span>(Choose File)</span>
            </button>
          </form>

          <div className={styles.LoginButtonBox}>
            <button
              className={styles.LoginButton}
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
