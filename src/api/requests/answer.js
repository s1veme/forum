import axios from "axios"

const answer = {
    get(){

    },
    create(data){
        return axios.post('api/posts/add-answer/', data)
    }
}

export default answer