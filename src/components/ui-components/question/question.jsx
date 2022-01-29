import classes from "./question.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export const Question = ({ title, timestamp, tags, id }) => {
  return (
    <div className={classes.question}>
      <NavLink to={`/question/${id}`} className={classes.question__title}>
        {title.substring(0, 100)}...
      </NavLink>
      <div className={classes.question__footer}>
        <div className={classes.question__tags}>
          {tags.map((el, i) => (
            <div className={classes.question__tag} key={i}>
              {el}
            </div>
          ))}
        </div>
        <div className={classes.question__time}>{timestamp}</div>
      </div>
    </div>
  );
};
