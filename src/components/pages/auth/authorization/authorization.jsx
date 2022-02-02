import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import requests from "../../../../api/requests";
import actions from "../../../../redux/actions";
import classes from "./authorization.module.scss";
import axios from "axios";
import M from "materialize-css";
import { Spinner } from "../../../ui-components/Spinner/Spinner";

export const AuthorizationPage = () => {
  const [isLoading, setLoading] = useState();
  const [form, setForm] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const cookies = new Cookies();

  const formHandler = (e) => {
    e.preventDefault();

    const getFormData = async () => {
      setLoading(true);
      requests.auth
        .create(form.email, form.password)
        .then(({ data }) => {
          const { token } = data;
          cookies.set("token", token, { path: "/" });

          axios.defaults.headers.authorization = `Bearer ${token}`;
          dispatch(actions.auth(token));
          M.toast({ html: "auth succes", classes: "succes" });
          navigate("/");
        })
        .catch((e) => {
          M.toast({
            html: [...e.response.data.non_field_errors],
            classes: "error",
          });
        })
        .finally(() => setLoading(false));
    };
    getFormData();
  };
  useEffect(() => {
    return () => {
      setLoading(null);
    };
  }, []);

  const cleanInputs = (e) => {
    if (e.target.classList.contains(classes.form__input))
      e.target.style.borderBottom = " 1px solid #ccc";
  };

  const setInputValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={classes.form__wrapper}>
      <form
        action=""
        className={classes.form}
        onSubmit={formHandler}
        onInput={cleanInputs}
      >
        <div className={classes.form__title}></div>
        <div className={classes.form__group}>
          <input
            className={classes.form__input}
            name="email"
            onChange={setInputValue}
            value={form.email}
            required
          />
          <span className={classes.form__bar}></span>
          <label>e-mail</label>
        </div>
        <div className={classes.form__group}>
          <input
            className={classes.form__input}
            type="password"
            name="password"
            onChange={setInputValue}
            value={form.password}
            required
          />
          <span className={classes.form__bar}></span>
          <label>Пароль</label>
        </div>
        <button className={classes.form__button}>Авторизоваться</button>
      </form>
    </div>
  );
};
