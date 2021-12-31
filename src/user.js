import axios from "axios";
import requests from "./api/requests";

import { openModal, validationForm } from "./modal";
const userBlock = document.querySelector(".user");
const logoutBtn = document.getElementById('logoutBtn')
const user = async () => {
    const token = localStorage.getItem("token");

    logout()
    if (!token)
        return;

    axios.defaults.headers.token = token;
    const { name, img } = await requests.auth.get(token);
    console.log(name, img);
};
const logout = async () => {
    logoutBtn.addEventListener('click', (e => {
        localStorage.clear()
        location.reload()
    }))
}
userBlock.addEventListener("click", openModal);
validationForm()
export { user };
