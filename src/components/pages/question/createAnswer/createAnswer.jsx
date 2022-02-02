import classes from "./index.module.scss";
import React, { useState } from "react";
import requests from "../../../../api/requests";
import MyEditor from "../../createQuestion/editor/editor";
import propType from "prop-types";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CreateAnswer = ({ id, updateCallback }) => {
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const token = useSelector((state) => state.authReducer.token);

  const handleChange = (data) => {
    setContent(data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await requests.answer.create({
        content,
        post: parseInt(id),
      });
      updateCallback();
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  return token ? (
    <form className={classes.answer} onSubmit={onSubmit}>
      <div className={classes.answer__title}>Ваш ответ</div>
      <MyEditor handleChange={handleChange} />
      <button
        type="submit"
        className={classes.answer__button}
        disabled={isLoading}
      >
        Отправить ответ
      </button>
    </form>
  ) : (
    <div className={classes.not_auth}>
      Чтобы ответить <NavLink to={"/auth/authorization"}>авторизуйтесь</NavLink>
    </div>
  );
};

CreateAnswer.propType = {
  id: propType.number,
  updateCallback: propType.func,
};

export { CreateAnswer };
