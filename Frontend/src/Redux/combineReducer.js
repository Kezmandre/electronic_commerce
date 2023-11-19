import { combineReducers } from "redux";
import {
  createProductReducer,
  createUserReducer,
  deleteProductReducer,
  deleteUserReducer,
  getProductReducer,
  getProductsReducer,
  getUserReducer,
  getUsersReducer,
  loginUserReducer,
  updateProductReducer,
  updateUserReducer,
} from "./Reducers";

export const reducers = combineReducers({
  createUser: createUserReducer,
  getUsers: getUsersReducer,
  getUser: getUserReducer,
  updateUser: updateUserReducer,
  deleteUser: deleteUserReducer,
  loginUser: loginUserReducer,
  createProduct: createProductReducer,
  getProduct:getProductReducer,
  getProducts:getProductsReducer,
  updateProduct:updateProductReducer,
  deleteProduct:deleteProductReducer
});
