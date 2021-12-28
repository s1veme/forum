import axios from "axios";

const modal = document.querySelector(".modal");

const openModal = (e) => {
  axios.defaults.headers.token
    ? modal.classList.add("logout")
    : modal.classList.add("login");

  const toggleAnim = (elem, direction) => {
    return elem.animate(
      [
        { top: "80px", opacity: 1 },
        {
          top: "130px",
          opacity: 0,
        },
      ],
      {
        duration: 300,
        fill: "forwards",
        direction,
      }
    );
  };
  if (modal.classList.contains("open")) {
    toggleAnim(modal).addEventListener("finish", () => {
      modal.classList.remove("open");
    });
  } else {
      modal.classList.add('open')
    toggleAnim(modal, "reverse")
  }
};

export { openModal };
