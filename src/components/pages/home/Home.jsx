import { useEffect, useState } from "react";
import requests from "../../../api/requests";

import { Question } from "../../ui-components/question/question";
import { Spinner } from "../../ui-components/Spinner/Spinner";

export const HomePage = () => {
  const [questions, setQuestions] = useState();
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        setQuestions(await (await requests.question.get()).data.results);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        return e;
      }
    };
    getPosts();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : questions ? (
    <div className="container">
      {questions.map(({ title, id, owner, tags, content }, i) => (
        <Question
          tags={tags}
          id={id}
          title={title}
          owner={owner}
          text={content}
          key={i}
        />
      ))}
    </div>
  ) : (
    "posts hasnt"
  );
};
