import { combineReducers } from "redux";
import { createUserReducer, deleteUserReducer, getUserReducer, getUsersReducer, loginUserReducer, updateUserReducer } from "./Reducers";




export const reducers = combineReducers({
    createUser:createUserReducer,
    getUsers : getUsersReducer,
    getUser:getUserReducer,
    updateUser:updateUserReducer,
    deleteUser:deleteUserReducer,
    loginUser:loginUserReducer
})