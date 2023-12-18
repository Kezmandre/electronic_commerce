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
import { modalReducer } from "./Reducers/modal";
import { addToCartReducers, deleteCartReducers, getCartReducers, getCartsReducers, updateCartQuantityReducers, updateCartReducers } from "./Reducers/carts";

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
  deleteProduct:deleteProductReducer,
  addToCart:addToCartReducers,
  getCarts:getCartsReducers,
  getCart:getCartReducers,
  updateCart:updateCartQuantityReducers,
  deleteCart:deleteCartReducers,
  modal:modalReducer
});
