import classes from "./question.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { Tag } from "../tag/tag";
import { string, number, array } from "prop-types";

const Question = ({ title, timestamp, tags, id, answers }) => {
  const date = new Date(timestamp);

  return (
    <div className={classes.question}>
      <NavLink to={`/question/${id}`} className={classes.question__title}>
        {title.substring(0, 100)}...
      </NavLink>
      <div className={classes.question__footer}>
        <div className={classes.question__tags}>
          {tags.slice(0, 5).map((el, i) => (
            <Tag tag={el} key={i} />
          ))}
        </div>
        <div className={classes.question__data}>
          <div className={classes.question__time}>
            {date.toLocaleString("ru-RU", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }) + date.toLocaleString()}
          </div>
          <div className={classes.question__answers}>
            {answers.length} ответов
          </div>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  title: string,
  timestamp: string,
  tags: array,
  id: number,
  answers: array,
};

export { Question };
