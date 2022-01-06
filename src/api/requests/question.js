import axios from "axios"
const question = {
    get(id) {
        return axios.get(`/api/posts/question/${id}`)
    }
}

export default question