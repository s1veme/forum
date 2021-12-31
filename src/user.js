import axios from "axios";
import requests from "./api/requests";

import { openModal, validationForm } from "./modal";
import {image} from "tailwindcss/lib/util/dataTypes";
const userBlock = document.querySelector(".user");
const userImage = userBlock.querySelector(".user__img")
const logoutBtn = document.getElementById('logoutBtn')
const user = async () => {
    const token = localStorage.getItem("token");

    if (!token)
        return;

    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    const response = await requests.auth.get(token);
    const imageAvatar = response.data['avatar']
    if (imageAvatar) {
        userImage.setAttribute('src', imageAvatar)
    }
};
const logout = () => {
    logoutBtn.addEventListener('click', (e => {
        localStorage.clear()
        location.reload()
    }))
}
userBlock.addEventListener("click", openModal);
validationForm()
logout()
export { user };
