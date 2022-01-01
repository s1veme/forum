import axios from "axios"

const question = {
    get() {
        return axios.get('api/posts/questions/')
    },
    create() {

    }
}

export default question



/*Запрос создается по принципу
    Экспортируется обьект, содержащий 2 поля:
    get() - по нему мы получаем данные(в данном случае вопрос) - должен сделать запрос и вернуть промис

    create() - для POST-запроса, делает запрос и возвращает промис.
*/