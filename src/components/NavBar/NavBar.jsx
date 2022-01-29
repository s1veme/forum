import React, { useEffect, useState, useRef } from "react";
import requests from "../../api/requests";
import { Spinner } from "../ui-components/Spinner/Spinner";
import classes from "./NavBar.module.scss";
import img from "../../assets/images/default_user.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
import logo from "../../assets/images/logo.svg";
export const NavBar = () => {
  const cookies = new Cookies();
  const [userData, setUserData] = useState();
  const [isLoading, setLoading] = useState();

  const token = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(actions.auth(undefined));
    cookies.remove("token");
    window.location.reload();
  };

  useEffect(() => {
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
        <div className={classes.menu}>
          <div className={classes.menu__item}>ВОПРОСЫ</div>
          <NavLink to={"/tape"} className={classes.menu__item}>ЛЕНТА</NavLink>
          <div className={classes.menu__item}>ПОПУЛЯРНОЕ</div>
        </div>
        <div className={classes.user}>
          <div className={classes.modal__wrap}></div>

          <div className={classes.user__name}>
            {userData ? userData.username : ""}
          </div>

          <img
            src={userData && userData.avatar ? userData.avatar : img}
            alt="user avatar"
            className={classes.user__avatar}
          />
        </div>
      </div>
    </nav>
  );
};
