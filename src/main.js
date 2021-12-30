import { posts } from "../assets/posts";
import css from "../css/index.scss";
import requests from "./api/requests";
import { renderQuestion } from "./components/question";

import { user } from "./user";

const startApp = () => {
  user();
  let currentPage = 7;
  renderQuestion(
    requests.question.get((currentPage - 1) * 10, currentPage * 10)
  );
};

startApp();
