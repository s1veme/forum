import { NavLink } from "react-router-dom";
import img from "../../assets/images/question.png";
import classes from "./RightNav.module.scss";
export const RightNav = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/question/create" className={classes.nav__item}>
        <img src={img} alt="question" />
        Задать вопрос
      </NavLink>
      <NavLink to="/question/create" className={classes.nav__item}>
        <img src={img} alt="question" />
        Задать вопрос
      </NavLink>
      <NavLink to="/question/create" className={classes.nav__item}>
        <img src={img} alt="question" />
        Задать вопрос
      </NavLink>
      <NavLink to="/question/create" className={classes.nav__item}>
        <img src={img} alt="question" />
        Задать вопрос
      </NavLink>
      <NavLink to="/question/create" className={classes.nav__item}>
        <img src={img} alt="question" />
        Задать вопрос
      </NavLink>
      <NavLink to="/question/create" className={classes.nav__item}>
        <img src={img} alt="question" />
        Задать вопрос
      </NavLink>
      <NavLink to="/question/create" className={classes.nav__item}>
        <img src={img} alt="question" />
        Задать вопрос
      </NavLink>
    </nav>
  );
};
