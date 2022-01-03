import axios from "axios"
export const user = {
    get() {
        return axios.get('api/user/profile')
    },
    create(data) {
        return axios.post('/api/auth/users/', data)
    }
}