import { string } from "prop-types";
import { useState } from "react";
import classes from "./Achivement.module.scss";
import achive from '../../../assets/images/achive.png'
const Achivment = ({ title, image, description }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const clickHandler = (e) => {
    setCardOpen(!cardOpen);
  };
  return (
    <div
      className={`${classes.card} ${cardOpen ? classes.active : ""}`}
      onClick={clickHandler}
    >
      <div className={classes.card__front}>
        <div className={classes.card__front_content}>
          <div className={classes.card__title}>{title}</div>
          <img alt="achivement" src={achive} className={classes.card__img} />
        </div>
      </div>
      <div className={classes.card__back}>
        <div className={classes.card__back_content}>{description}</div>
      </div>
    </div>
  );
};

Achivment.propType = {
  title: string.isRequired,
  image: string,
  description: string,
};

export { Achivment };
