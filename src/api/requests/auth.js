import axios from "axios"

const auth = {
    get() {
        return axios.get('api/user/profile')
    },
    create(email, body) {
        return axios.post('test')
    }
}


export default auth