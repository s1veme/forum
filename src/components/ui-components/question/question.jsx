import classes from "./question.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export const Question = ({ title, text, tags, id }) => {
  const content = text
    .replace("<p>", "")
    .replace("&nbsp;", "")
    .replace("</p>", "");

  return (
    <div className={classes.question}>
      <NavLink to={`/question/${id}`} className={classes.question__title}>
        {title.substring(0, 100)}...
      </NavLink>
      <div className={classes.question__content}>
        {content.substring(0, 500)}...
      </div>
      <div className={classes.question__tags}>
        {tags.map((el, i) => (
          <div className={classes.question__tag} key={i}>
            #{el}
          </div>
        ))}
      </div>
    </div>
  );
};
