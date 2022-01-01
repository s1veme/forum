import { useEffect, useState } from "react";
import requests from "../../../api/requests";

export const HomePage = () => {
  const [questions, setQuestions] = useState();
  useEffect(() => {
    const getPosts = async () => {
      try {
        setQuestions(await (await requests.question.get()).data);
      } catch (e) {
        return e;
      }
    };
    getPosts();
  }, []);
  console.log(questions)
  return <div>test</div>;
};
