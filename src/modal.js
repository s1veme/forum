import axios from "axios";

const modal = document.querySelector(".modal");
const authModal = document.querySelector(".auth-modal");
const registerModal = document.querySelector(".register-modal");
const closeModalBtn = document.querySelectorAll(".modal-reg-auth__close");

const openModal = (e) => {
    axios.defaults.headers['Authorization']
        ? modal.classList.add("logout")
        : modal.classList.add("login");

    const toggleAnim = (elem, direction) => {
        return elem.animate([{ top: "80px", opacity: 1 }, {
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
const authForm = document.querySelector('.auth-modal__form')
const registerUsername = document.getElementById('register-username')
const authUsername = document.getElementById('auth-username')
const registerEmail = document.getElementById('register-email')
const registerFirstname = document.getElementById('register-firstname')
const registerLastname = document.getElementById('register-lastname')
const registerPassword = document.getElementById('register-password')
const authPassword = document.getElementById('auth-password')
const registerRetryPassword = document.getElementById('register-retry-password')

const messages = {
    0: 'Поле не может быть пустым',
    1: 'Пароли должен иметь более 6-ти символов',
    2: 'Пароли не совпадают',
    3: 'Неверный email'
}

const validationForm = () => {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        checkInputs()
        const oldForm = document.forms.registerForm,
            formData = new FormData(oldForm);
        for (let [name, value] of formData) {
            console.log(`${name} = ${value}`);
        }

        const response = await axios.post('/api/auth/users/', formData)
        const result = response.json()
        console.log(result.message)
    })
    authForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        checkInputs()
        const oldForm = document.forms.authForm,
            formData = new FormData(oldForm)
        for (let [name, value] of formData) {
            console.log(`${name} = ${value}`);
        }
        const response = await axios.post('/api/user/token-create/', formData)
        if (response.data.token) {
            const token = response.data.token
            localStorage.setItem('token', token)
            axios.defaults.headers['Authorization'] = `Bearer ${token}`
        }
        location.reload()

    })
    const checkInputs = () => {
        const usernameValue = registerUsername.value.trim();
        const authUsernameValue = authUsername.value.trim();
        const emailValue = registerEmail.value.trim();
        const firstnameValue = registerFirstname.value.trim();
        const lastnameValue = registerLastname.value.trim();
        const passwordValue = registerPassword.value.trim();
        const password2Value = registerRetryPassword.value.trim();
        const authPasswordValue = authPassword.value.trim();

        if (usernameValue === '') setError(registerUsername, messages[0])
        else setSuccess(registerUsername)
        if (authUsernameValue === '') setError(authUsername, messages[0])
        else setSuccess(authUsername)

        if (emailValue === '') setError(registerEmail, messages[0])
        else if (!isEmail(emailValue)) setError(registerEmail, messages[3])
        else setSuccess(registerEmail)

        if (firstnameValue === '') setError(registerFirstname, messages[0])
        else setSuccess(registerFirstname)

        if (lastnameValue === '') setError(registerLastname, messages[0])
        else setSuccess(registerLastname)

        if (passwordValue === '') setError(registerPassword, messages[0])
        else if (passwordValue.length < 6) setError(registerPassword, messages[1])
        else setSuccess(registerPassword);

        if (password2Value === '') setError(registerRetryPassword, messages[0])
        else if (passwordValue !== password2Value) setError(registerRetryPassword, messages[2])
        else setSuccess(registerRetryPassword);

        if (authPasswordValue === '') setError(authPassword, messages[0])
        else if (authPasswordValue.length < 6) setError(authPassword, messages[1])
        else setSuccess(authPassword);

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
export { openModal, validationForm };
