import { useEffect, useState } from "react";
import requests from "../../../api/requests";
import { RightNav } from "../../RightNav/RightNav";
import classes from "./Home.module.scss";
import { Question } from "../../ui-components/question/question";
import { Spinner } from "../../ui-components/Spinner/Spinner";

export const HomePage = () => {
  const [questions, setQuestions] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const data = (await requests.question.get()).data.results;
        return setQuestions(data);
      } catch (e) {
        return e;
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : questions ? (
    <div className={classes.home__wrap}>
      <RightNav />
      <div className="container">
        {questions.map(({ title, id, tags, content }, i) => (
          <Question tags={tags} id={id} title={title} text={content} key={i} />
        ))}
      </div>
      <RightNav />
    </div>
  ) : (
    "posts hasnt"
  );
};
