import { combineReducers } from "redux";
import { createUserReducer, getUserReducer, getUsersReducer } from "./Reducers";




export const reducers = combineReducers({
    createUser:createUserReducer,
    getUsers : getUsersReducer,
    getUser:getUserReducer
})