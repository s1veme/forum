import axios from "axios";
import requests from "./api/requests";
import { openModal } from "./api/requests/modal";

const userBlock = document.querySelector(".user");

const user = async () => {
  const token = localStorage.getItem("token");

  if (!token) return;
  axios.defaults.headers.token = token;
  const { name, img } = await requests.auth.get(token);
  console.log(name, img);
};
 


userBlock.addEventListener("click", openModal);

export { user };
