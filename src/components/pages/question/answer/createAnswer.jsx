import classes from "./index.module.scss";
import React from "react";
import { useForm } from "react-hook-form";
import requests from "../../../../api/requests";
export const CreateAnswer = ({ id }) => {
  const { register, handleSubmit } = useForm();
  console.log(id)
  const onSubmit = async (data) => {
    try {
      await requests.answer.create({
        ...data,
        title: data.content,
        id
      });
    } catch (e) {}
  };
  return (
    <form className={classes.answer} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.answer__title}>Ваш ответ</div>
      <textarea className={classes.answer__field} {...register("content")} />
      <button type="submit" className={classes.answer__button}>
        Отправить ответ
      </button>
    </form>
  );
};
