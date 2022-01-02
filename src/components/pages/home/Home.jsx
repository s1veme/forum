import { useEffect, useState } from "react";
import requests from "../../../api/requests";

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

        setLoading(false);
        return setQuestions(data);
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
