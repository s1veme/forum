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
  const [openModal, setOpenModal] = useState();
  const token = useSelector((state) => state.authReducer.token);

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
          {openModal && (
            <div onClick={() => setOpenModal(false)}>
              <Modal isAuth={!!token} />
            </div>
          )}
          <div className={classes.user__name}>
            {userData ? userData.username : ""}
          </div>

          <img
            src={userData ? userData.avatar : img}
            alt="user avatar"
            className={classes.user__avatar}
            onClick={() => setOpenModal(!openModal)}
          />
        </div>
      </div>
    </nav>
  );
};
