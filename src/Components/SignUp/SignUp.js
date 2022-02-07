import React from "react";
import styles from "./SignUp.module.css";
import CryptomomLogo from "../../Assets/General/Logo.svg";
import LoginLogo from "../../Assets/SignUpPage/login.svg";

const SignUp = () => {
  return (
    <div className={styles.SignUpWrapper}>
      <div className={styles.SignUpBoxWrapper}>
        <div className={styles.SignUpBoxBorder}>
          <img
            src={CryptomomLogo}
            alt="Cryptomon"
            className={styles.CryptomomLogo}
          />
          <img src={LoginLogo} alt="Cryptomon" className={styles.LoginLogo} />

          <div className={styles.usernameInput}>
            <form>
              <input
                className={styles.UserNameInputBox}
                type="text"
                id="username"
                name="username"
                placeholder="username"
              ></input>
            </form>
          </div>

          <div className={styles.AvatarButtonBox}>
            <button className={styles.AvatarButton}>
              Avatar<span>(Choose File)</span>
            </button>
          </div>

          <div className={styles.LoginButtonBox}>
            <button className={styles.LoginButton}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
