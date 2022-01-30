import classes from "./questions.module.scss";
import requests from "../../../api/requests";
import React, { useState, useEffect } from "react";
import { Spinner } from "../../ui-components/Spinner/Spinner";
import { Question } from "../../ui-components/question/question";
export const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const data = (await requests.questions.get()).data.results;
        return setQuestions(data);
      } catch (e) {
        return e;
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);
  const posts = questions.map(({ title, timestamp, tags, id }) => {
    return <Question timestamp={timestamp} title={title} tags={tags} id={id} key={id}/>;
  });
  return !isLoading ? (
    <div className={classes.questions}>{posts}</div>
  ) : (
    <Spinner />
  );
};
