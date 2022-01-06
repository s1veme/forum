import axios from "axios"

const questions = {
    get() {
        return axios.get('api/posts/questions/')
    },
    create(data) {
        return axios.post('api/posts/create-question/', data)
    }
}

export default questions



/*Запрос создается по принципу
    Экспортируется обьект, содержащий 2 поля:
    get() - по нему мы получаем данные(в данном случае вопрос) - должен сделать запрос и вернуть промис

    create() - для POST-запроса, делает запрос и возвращает промис.
*/