import classes from "./question.module.scss";
import React from "react";

export const Question = ({ title, images, owner, text, tags }) => {
  const content = text
    .replace("<p>", "")
    .replace("&nbsp;", "")
    .replace("</p>", "");

  return (
    <div className={classes.question}>
      <div className={classes.question__title}>
        {title.substring(0, 100)}...
      </div>
      <div className={classes.question__content}>
        {content.substring(0, 500)}...
      </div>
      <div className={classes.question__tags}>
        
        {tags.map((el, i) => (
          <div className={classes.question__tag} key={i}>#{el}</div>
        ))}
      </div>
    </div>
  );
};
