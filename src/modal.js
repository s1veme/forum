import axios from "axios";

const modal = document.querySelector(".modal");
const authModal = document.querySelector(".auth-modal");
const registerModal = document.querySelector(".register-modal");
const closeModalBtn = document.querySelectorAll(".modal-reg-auth__close");

const openModal = (e) => {
    axios.defaults.headers.token
        ? modal.classList.add("logout")
        : modal.classList.add("login");

    const toggleAnim = (elem, direction) => {
        return elem.animate([{top: "80px", opacity: 1}, {
            top: "-130px", opacity: 0,
        },], {
            duration: 200, fill: "forwards", direction,
        });
    };
    if (modal.classList.contains("open")) {
        toggleAnim(modal).addEventListener("finish", () => {
            modal.classList.remove("open");
        });
    } else {
        modal.classList.add("open");
        toggleAnim(modal, "reverse");
    }
    modal.addEventListener('click', (e) => {
        e.preventDefault()
        const path = e.target.dataset.typeBtn;
        if (path) {
            if (path === 'auth') {
                authModal.classList.add('active')
                registerModal.classList.remove('active')
            }
            if (path === 'reg') {
                registerModal.classList.add('active')
                authModal.classList.remove('active')
            }
            toggleAnim(modal).addEventListener("finish", () => {
                modal.classList.remove("open");
            });

        } else closeModal()
        closeModalBtn.forEach(item => item.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('close')
            closeModal()
        }))
    })
    const closeModal = () => {
        authModal.classList.remove('active')
        registerModal.classList.remove('active')
    }
};

const registerForm = document.querySelector('.register-modal__form')
const registerUsername = document.getElementById('register-username')
const registerEmail = document.getElementById('register-email')
const registerFirstname = document.getElementById('register-firstname')
const registerLastname = document.getElementById('register-lastname')
const registerPassword = document.getElementById('register-password')
const registerRetryPassword = document.getElementById('register-retry-password')


const validationForm = () => {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        checkInputs()
    })
    const checkInputs = () => {
        const usernameValue = registerUsername.value.trim();
        const emailValue = registerEmail.value.trim();
        const firstnameValue = registerFirstname.value.trim();
        const lastnameValue = registerLastname.value.trim();
        const passwordValue = registerPassword.value.trim();
        const password2Value = registerRetryPassword.value.trim();

        if (usernameValue === '') setError(registerUsername, 'Имя пользователя не может быть пустым')
        else setSuccess(registerUsername)

        if (emailValue === '') setError(registerEmail, 'Email не может быть пустым')
        else if (!isEmail(emailValue)) setError(registerEmail, 'Неверный email')
        else setSuccess(registerEmail)

        if (firstnameValue === '') setError(registerFirstname, 'Поле не может быть пустым')
        else setSuccess(registerFirstname)

        if (lastnameValue === '') setError(registerLastname, 'Поле не может быть пустым')
        else setSuccess(registerLastname)

        if (passwordValue === '') setError(registerPassword, 'Поле пароля не может быть пустым')
        else if (passwordValue.length < 6) setError(registerPassword, 'Пароль должеть быть более 6-ти символов')
        else setSuccess(registerPassword);

        if (password2Value === '') setError(registerRetryPassword, 'Поле не может быть пустым')
        else if (passwordValue !== password2Value) setError(registerRetryPassword, 'Пароли не совпадают')
        else setSuccess(registerRetryPassword);
    }

    const setError = (input, message) => {
        const formControl = input.parentElement;
        const error = formControl.querySelector('.modal-reg-auth__error');
        formControl.classList.remove('modal-reg-auth__success-border')
        formControl.classList.add('modal-reg-auth__error-border')
        error.innerText = message
    }

    const setSuccess = (input) => {
        const formControl = input.parentElement;
        const error = formControl.querySelector('.modal-reg-auth__error');
        formControl.classList.remove('modal-reg-auth__error-border')
        formControl.classList.add('modal-reg-auth__success-border')
        error.innerText = ''
    }
    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }
}
export {openModal, validationForm};
