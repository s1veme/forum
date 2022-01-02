import axios from "axios"

const auth = {
    get() {
        return axios.get('api/user/profile')
    },
    create(email, password) {
        return axios.post('api/user/token-create/', {
            email, password
        })
    }
}


export default auth