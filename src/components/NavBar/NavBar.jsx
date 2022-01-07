import React, { useEffect, useState } from "react";
import requests from "../../api/requests";
import { Spinner } from "../ui-components/Spinner/Spinner";
import classes from "./NavBar.module.scss";
import img from "../../assets/images/default_user.png";
import { useSelector } from "react-redux";
import { Modal } from "../ui-components/modal/modal";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setLoading] = useState();
  const token = useSelector((state) => state.authReducer.token);
  const openModal = (e) => {
    const modal = document.querySelector("." + classes.modal__wrap);
    if (matchMedia("(max-width: 700px)").matches) {
      const toggleAnimate = (direction) => {
        return modal.animate(
          [{ transform: "translateY(0%)" }, { transform: "translateY(200%)" }],
          {
            duration: 200,
            fill: "forwards",
            direction,
          }
        );
      };
      if (modal.classList.contains(classes.open)) {
        toggleAnimate().addEventListener("finish", () => {
          modal.classList.remove(classes.open);
        });
      } else {
        modal.classList.add(classes.open);
        toggleAnimate("reverse");
      }
    } else {
      const toggleAnimate = (direction) => {
        return modal.animate(
          [
            { transform: "translateX(200%)" },
            { transform: "translateX(-10%)" },
          ],
          {
            duration: 200,
            fill: "forwards",
            direction,
          }
        );
      };
      if (modal.classList.contains(classes.open)) {
        toggleAnimate("reverse").addEventListener("finish", () =>
          modal.classList.remove(classes.open)
        );
      } else {
        modal.classList.add(classes.open);
        toggleAnimate();
      }
    }
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
        <div className={classes.logo}>Logo</div>
      </NavLink>
      <div className={classes.menu}>
        <div className={classes.user}>
          <div onClick={openModal} className={classes.modal__wrap}>
            <Modal isAuth={!!token} />
          </div>

          <div className={classes.user__name}>
            {userData ? userData.username : ""}
          </div>

          <img
            src={userData && userData.avatar ? userData.avatar : img}
            alt="user avatar"
            className={classes.user__avatar}
            onClick={openModal}
          />
        </div>
      </div>
    </nav>
  );
};
