import React, { useEffect, useState, useRef } from "react";
import requests from "../../api/requests";
import { Spinner } from "../ui-components/Spinner/Spinner";
import classes from "./NavBar.module.scss";
import img from "../../assets/images/default_user.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
import logo from "../../assets/images/logo.svg";
import useOnClickOutside from "../../hooks/useOutsideClick";
export const NavBar = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setLoading] = useState();
  const [modal, setOpenModal] = useState(false);

  const modalRef = useRef();

  const token = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();

  const openModal = () => {
    setOpenModal(true);
  };

  useOnClickOutside(modalRef, () => setOpenModal(false));

  const logOut = () => {
    function deleteAllCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }
    deleteAllCookies();
    dispatch(actions.auth(""));
  };

  const closeModal = (e) => {
    if (e.target.classList.contains(classes.modal__button)) setOpenModal(false);
  };

  useEffect(() => {
    setUserData(undefined);
    const getUserData = async () => {
      try {
        setLoading(true);
        const userDataRequest = (await requests.auth.get()).data;

        setUserData(userDataRequest);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    if (token) {
      getUserData();
    }
  }, [token]);

  return isLoading ? (
    <Spinner />
  ) : (
    <nav className={classes.nav}>
      <NavLink to="/">
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <div className={classes.menu__wrap}>
        <div className={classes.menu}></div>
        <div className={classes.user}>
          <div className={classes.modal__wrap}></div>

          <div className={classes.user__name_menu}>
            {userData ? userData.username : ""}
          </div>

          <img
            src={userData && userData.avatar ? userData.avatar : img}
            alt="user avatar"
            className={classes.user__avatar}
            onClick={openModal}
          />
          {modal && (
            <div className={classes.modal} onClick={closeModal} ref={modalRef}>
              <div className={classes.modal__user}>
                <img
                  src={userData && userData.avatar ? userData.avatar : img}
                  alt="user avatar"
                  className={classes.user__avatar}
                />
                <div className={classes.user__name}>
                  {userData ? userData.username : ""}
                </div>
              </div>

              {!!token ? (
                <>
                  <NavLink
                    className={classes.modal__button}
                    to={"/question/create"}
                  >
                    Задать вопрос
                  </NavLink>
                  <div className={classes.modal__button}>Мои вопросы</div>
                  <NavLink to={"/profile"} className={classes.modal__button}>
                    Профиль
                  </NavLink>
                  <NavLink to={"/tape"} className={classes.modal__button}>
                    Лента
                  </NavLink>
                  <div className={classes.modal__button}>Настройки</div>
                  <div className={classes.modal__button} onClick={logOut}>
                    Выйти
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to={"/auth/authorization"}
                    className={classes.modal__button}
                    onClick={closeModal}
                  >
                    Авторизоваться
                  </NavLink>
                  <NavLink
                    to={"/auth/registration"}
                    className={classes.modal__button}
                  >
                    Зарегестрироваться
                  </NavLink>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
