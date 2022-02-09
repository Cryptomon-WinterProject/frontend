import React from "react";
import styles from "./Training.module.css";
import cross from "../../../Assets/Training/cancel.svg";
import poke from "../../../Assets/Training/pokemon_bg.svg";
import moncoin from "../../../Assets/Training/M-moncoin.svg";

function Training({
  name = "abcmon",
  duration = 25,
  rate = 15,
  rate1 = 20,
  amount = 45,
}) {
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

          <div className={styles.duration_slider}>Slider</div>
          <div className={styles.rate}>
            rate:
            <span>
              {rate} + <span>{rate1}XP Free</span> / Hour
            </span>
          </div>

          <div className={styles.rate_slider}>Slider</div>

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
