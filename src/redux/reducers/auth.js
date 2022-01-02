export const authReducer = (state = { token: undefined }, { type, payload }) => {
    switch (type) {
        case "AUTH_REDUCER": return { ...state, token: payload }
        default: return state
    }

}