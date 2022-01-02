const actions = {
    auth: (token) => {
        return {
            type: 'AUTH_REDUCER',
            payload: token
        }
    }
}

export default actions