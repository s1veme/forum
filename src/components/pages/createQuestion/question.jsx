import { useForm } from "react-hook-form";
import classes from "./question.module.scss";
import upload from "../../../assets/images/upload.png";
import { useState } from "react";
import requests from "../../../api/requests";
import M from "materialize-css";
import cross from "../../../assets/images/cross.svg";
import { useSelector } from "react-redux";
export const CreateQuestion = () => {
  const { register, handleSubmit } = useForm();
  const [uploaded, setUploaded] = useState([]);
  const [images, setImages] = useState([]);
  const token = useSelector((token) => token.authReducer.token);

  const onSubmit = async (data) => {
    console.log(data.images, images);
    try {
      const res = await requests.question.create({
        ...data,
        tags: data.tags.replace(",", " ").split(" "),
        images,
      });
    } catch (e) {
      M.toast({ html: e.response.data.detail, classes: "error" });
    }
  };
  const changeFilesHandler = (e) => {
    Array.from(e.target.files).forEach((el) => {
      setImages((prev) => [...prev, el]);
      let reader = new FileReader();
      reader.addEventListener("load", handleFile);
      reader.readAsDataURL(el);
    });
  };
  const handleFile = (e) => {
    const content = e.target.result;

    setUploaded((prevState) => [...prevState, content]);
    // You can set content in state and show it in render.
  };

  return token ? (
    <div className={classes.page}>
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
              {...register("title")}
            />
            <span className={classes.form__bar}></span>
            <label>
              Задайте вопрос(постарайтесь передать суть вопроса кратко)
            </label>
          </div>

          <div className={classes.form__group}>
            <textarea
              id=""
              cols="30"
              rows="10"
              className={classes.form__input}
              required
              type="text"
              {...register("description")}
            ></textarea>
            <span className={classes.form__bar}></span>
            <label>Вопрос</label>
          </div>
          <div className={classes.form__group}>
            <input
              className={classes.form__input}
              required
              type="text"
              {...register("tags")}
            />
            <span className={classes.form__bar}></span>
            <label>Тэги (через запятую)</label>
          </div>
          <div className={classes.form__file}>
            <div>
              <input
                type="file"
                {...register("images")}
                onChange={changeFilesHandler}
                accept=".png, .jpg"
                multiple
              ></input>
              <img src={upload} alt="upload" />
              <div className={classes.form__file_upload}>Загрузите файлы</div>
            </div>
          </div>
          <div className={classes.form__uploaded}>
            {uploaded.map((el, i) => (
              <div className={classes.img__wrap} key={i}>
                <img src={cross} alt="cross" className={classes.cross} />
                <img src={el} alt="uploaded" />
              </div>
            ))}
          </div>

          <button className={classes.form__button}>Задать вопрос</button>
        </form>
      </div>
    </div>
  ) : (
    "Авторизуйтесь"
  );
};
