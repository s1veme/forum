import classes from "./Home.module.scss";
import forum from "../../../assets/images/forum.jpg";
import arrow from "../../../assets/images/arrow.svg";
import books from "../../../assets/images/books.jpg";
import question from "../../../assets/images/questions.svg";
import user from "../../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
export const HomePage = () => {
  

  return (
    <div className={classes.container}>
      <div className={classes.home}>
        <div className={classes.home__content}>
          <div className={classes.home__title}>
            Добро пожаловать на наш форум
          </div>
          <div className={classes.home__subtitle}>
            Тут вы можете задать свой вопрос, или ответить на чей то
          </div>
        </div>
        <img src={forum} alt="" className={classes.home__img} />
      </div>
      <div className={classes.cards}>
        <NavLink className={classes.card} to={"/tape"}>
          <div className={classes.card__title}>
            <div className={classes.card__title_text}>Лента</div>
            <img className={classes.card__title_img} src={arrow} alt="arrow" />
          </div>
          <img src={books} className={classes.card__img} alt="content" />
        </NavLink>
        <NavLink className={classes.card} to={"/question/create"}>
          <div className={classes.card__title}>
            <div className={classes.card__title_text}>Задать вопрос</div>
            <img className={classes.card__title_img} src={arrow} alt="arrow" />
          </div>
          <img src={question} className={classes.card__img} alt="content" />
        </NavLink>
        <div className={classes.card}>
          <div className={classes.card__title}>
            <div className={classes.card__title_text}>Пользователи</div>
            <img className={classes.card__title_img} src={arrow} alt="arrow" />
          </div>
          <img src={user} className={classes.card__img} alt="content" />
        </div>
      </div>
    </div>
  )
};


