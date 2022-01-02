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
        <div className={classes.modal__button} onClick={logout}>
          Выйти
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
