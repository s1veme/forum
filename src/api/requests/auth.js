import axios from "axios"

export default {
    get() {
        return axios.get('api/user/profile')
    },
    create() {
    }
}

