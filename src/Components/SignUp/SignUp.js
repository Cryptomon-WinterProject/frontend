import React, { useRef, useState } from "react";
import styles from "./SignUp.module.css";
import CryptomomLogo from "../../Assets/General/Logo.svg";
import LoginLogo from "../../Assets/SignUpPage/login.svg";
import { uploadImage } from "../../Services/photoUpload.service";
import { logInUser } from "../../Services/auth.service";
import { useSelector } from "react-redux";

const SignUp = () => {
  const addImageInputRef = useRef(null);
  const formRef = useRef(123);
  const [images, setImages] = useState([LoginLogo]);
  const account = useSelector((state) => state.contractReducer.account);
  const contract = useSelector((state) => state.contractReducer.contract);

  const handleLogin = async (e) => {
    e.preventDefault();
    const name = formRef.current.elements.username.value;
    const imageUrl = images[0];
    // await logInUser(name, imageUrl, contract, account);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const [file] = addImageInputRef.current.avatarFileInput.files;
    try {
      if (file) {
        alert("Image Uploading Succesfully", "success");
        let urls = await uploadImage(file);
        setImages(urls);
        console.log(urls[0]);
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
            onSubmit={handleClick}
            ref={addImageInputRef}
          >
            <input
              type="file"
              name="fileInput"
              id="avatarFileInput"
              // style={{ display: "none" }}
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
