import React, { useState } from "react";
import styles from "./Training.module.css";
import cross from "../../../Assets/Training/cancel.svg";
import poke from "../../../Assets/Training/pokemon_bg.svg";
import moncoin from "../../../Assets/Training/M-moncoin.svg";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

function Training({
  name = "abcmon",
  Duration = 25,
  Rate = 15,
  rate1 = 20,
  amount = 45,
}) {
  const [duration, setduration] = useState(Duration);
  const [rate, setrate] = useState(Rate);

  const durationHandler = (event, newduration) => {
    setduration(newduration);
  };
  const rateHandler = (event, newrate) => {
    setrate(newrate);
  };

  const PrettoSlider = styled(Slider)({
    color: "#FFCB05",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      margin:1,
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
      "& .pretto-bar": {
        height: 9,
        width: 1,
        backgroundColor: "currentColor",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#FFCB05",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  function PrettoComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="pretto-bar" />
        <span className="pretto-bar" />
        <span className="pretto-bar" />
      </SliderThumb>
    );
  }

  PrettoComponent.propTypes = {
    children: PropTypes.node,
  };

  console.log(duration);

  return (
    <div className={styles.PopupBg}>
      <div className={styles.MainWrapper}>
        <div className={styles.ImageWrapper}>
          <img src={poke} alt="" className={styles.PokeImg} />
        </div>

        <div className={styles.Header}>
          <div className={styles.traingin_pokename}>
            Train<span>{name}</span>
          </div>
          <img src={cross} alt="" className={styles.cross}></img>
        </div>

        <div className={styles.DescriptionWrapper}>
          <div className={styles.duration}>
            Duration:<span>{duration} minutes</span>
          </div>

          <div className={styles.duration_slider}>
            <PrettoSlider
              value={duration}
              onChange={durationHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={300}
              aria-label="pretto slider"
              components={{ Thumb: PrettoComponent }}
            />
          </div>
          <div className={styles.rate}>
            rate:
            <span>
              {rate} + <span>{rate1}XP Free</span> / Hour
            </span>
          </div>

          <div className={styles.rate_slider}>
            <PrettoSlider
              value={rate}
              onChange={rateHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={300}
              components={{ Thumb: PrettoComponent }}
            />
          </div>

          <div className={styles.pay_button}>
            <button className={styles.paybtn}>
              <div className={styles.btn_content}>
                Train and pay <span>{amount}</span>
                <img
                  src={moncoin}
                  alt="moncoin"
                  className={styles.moncoin}
                ></img>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;
