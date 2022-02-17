import React from "react";
import styles from "./UpperSection.module.css";
import Logo from "../../../Assets/General/Logo.svg";
import { ReactComponent as PlusIcon } from "../../../Assets/General/Plus.svg";
import Button from "../../Button";
import SwitchButton from "../../SwitchButton";
import { useDispatch } from "react-redux";
import AddAuction from "../../PopUp/AddAuction";

function UpperSection() {
  const dispatch = useDispatch();

  return (
    <div className={styles.UpperSectionWrapper}>
      <img src={Logo} alt="Logo" className={styles.CryptomonLogo} />
      <SwitchButton />

      <Button
        name="Sell Cryptomon"
        primaryColor="var(--ter-black)"
        inverted
        wrapperClass={styles.SellButton}
        withIcon
        IconComp={PlusIcon}
        hoverBgColor="var(--white)"
        onClick={() => {
          dispatch({
            type: "HANDLE_POPUP_COMPONENT_RENDER",
            popupComponent: <AddAuction />,
          });
          dispatch({
            type: "HANDLE_POPUP_OPEN",
            popupOpen: true,
          });
        }}
      />
    </div>
  );
}
export default UpperSection;
