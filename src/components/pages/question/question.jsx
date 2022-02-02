import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requests from "../../../api/requests";
import { Spinner } from "../../ui-components/Spinner/Spinner";
import classes from "./question.module.scss";
import parse from "html-react-parser";
import { CreateAnswer } from "./createAnswer/createAnswer";
import { Answer } from "../../ui-components/answer/Answer";
import { Tag } from "../../ui-components/tag/tag";
export const QuestionPage = () => {
  const id = useParams().id;
  const [questionData, setQuestionData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getQuestionData = async () => {
    try {
      const res = await requests.question.get(id);
      setQuestionData({ ...res.data, content: parse(res.data.content) });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getQuestionData();
  }, [id]);

  return isLoading || !questionData ? (
    <Spinner />
  ) : (
    <div className={classes.post}>
      <div className={classes.post__title}>{questionData.title}</div>
      <div className={classes.post__content}>{questionData.content}</div>
      <div className={classes.post__tags}>
        {questionData.tags.map((el, i) => (
          <Tag tag={el} key={i} />
        ))}
      </div>
      <div className={classes.answers}>
        <div className={classes.answers__title}>Ответы:</div>
        {questionData.answers.map(({ owner_name: name, content, id }) => (
          <Answer name={name} content={content} key={id} />
        ))}
      </div>
      <CreateAnswer id={id} updateCallback={getQuestionData} />
    </div>
  );
};
