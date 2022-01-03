import { useForm } from "react-hook-form";
import requests from "../../../../api/requests";
import classes from "./registration.module.scss";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const RegistrationPage = () => {
  const { register, handleSubmit } = useForm();
  const location = useNavigate();
  const [isLoading, setLoading] = useState();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const test = await requests.user.create({
        ...data,
        preferences: data.preferences.replace(",", "").split(" "),
      });
      console.log(test);
      M.toast({
        html: "Регистрация успешна, авторизуйтесь",
        classes: "succes",
      });
      location("/auth/authorization");
    } catch (e) {
      M.toast({
        html: e.response.data.email || e.response.data.password,
        classes: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={classes.form__wrapper}>
      <form
        action=""
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.form__title}></div>
        <div className={classes.form__group}>
          <input
            className={classes.form__input}
            required
            {...register("email")}
          />
          <span className={classes.form__bar}></span>
          <label>E-mail</label>
        </div>

        <div className={classes.form__group}>
          <input
            className={classes.form__input}
            required
            type="text"
            {...register("username")}
          />
          <span className={classes.form__bar}></span>
          <label>Username</label>
        </div>
        <div className={classes.form__group}>
          <input
            className={classes.form__input}
            required
            type="text"
            {...register("preferences")}
          />
          <span className={classes.form__bar}></span>
          <label>Preferences (через запятую)</label>
        </div>
        <div className={classes.form__group}>
          <input
            className={classes.form__input}
            required
            type="password"
            {...register("password")}
          />
          <span className={classes.form__bar}></span>
          <label>Password</label>
        </div>
        <button className={classes.form__button} disabled={isLoading}>
          Зарегестрироваться
        </button>
      </form>
    </div>
  );
};
