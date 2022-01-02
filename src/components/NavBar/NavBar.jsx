import React, { useEffect, useState, useContext } from "react";
import requests from "../../api/requests";
import { Spinner } from "../ui-components/Spinner/Spinner";
import classes from "./NavBar.module.scss";
import { AuthContext } from "../../App";
export const NavBar = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setLoading] = useState();

  const { token, setUserToken } = useContext(AuthContext);

  console.log(token);
  useEffect(() => {
    const getUserData = async () => {
      try {
        setUserData(await requests.auth.get());
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e);
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
      <div className={classes.logo}>Logo</div>
      <div className={classes.menu}>
        <div className={classes.user}>
          <img
            src={userData ? userData.name : "./assets/images/default_user.png"}
            alt="user avatar"
            className={classes.user__avatar}
          />
        </div>
      </div>
    </nav>
  );
};
