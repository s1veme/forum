import {posts} from "../assets/posts";
import css from "../css/index.scss";
import requests from "./api/requests";
import {renderQuestion} from "./components/question";
import axios from 'axios'
import {user} from "./user";

axios.defaults.baseURL = 'http://localhost:8000'

const startApp = () => {
    user();
    let currentPage = 7;
    renderQuestion(
        requests.question.get((currentPage - 1) * 10, currentPage * 10)
    );
};

startApp();
