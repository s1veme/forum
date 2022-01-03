import classes from "./modal.module.scss";
import { NavLink } from "react-router-dom";
import React from "react";
export const Modal = ({ isAuth }) => {
  const logout = () => {
    document.cookie = "token=";
    window.location.reload();
  };
  return (
    <div className={classes.modal}>
      {isAuth ? (
        <div className={classes.modal__buttons}>
          <div className={classes.modal__button} onClick={logout}>
            Выйти
          </div>
          <NavLink className={classes.modal__button} to="/user/settings">
            Настройки
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="auth/registration" className={classes.modal__button}>
            Зарегистироваться
          </NavLink>
          <NavLink to="auth/authorization" className={classes.modal__button}>
            Авторизоваться
          </NavLink>
        </div>
      )}
    </div>
  );
};
