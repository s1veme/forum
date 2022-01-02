import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/auth";
const rootReducer = combineReducers({
    authReducer
})

export const store = createStore(rootReducer)