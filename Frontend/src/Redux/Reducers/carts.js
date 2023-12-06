import { DELETE_USER_RESET } from "../constants";
import {
  CREATE_CARTS_ERROR,
  CREATE_CARTS_REQUEST,
  CREATE_CARTS_RESET,
  CREATE_CARTS_SUCCESS,
  DELETE_CARTS_ERROR,
  DELETE_CARTS_REQUEST,
  DELETE_CARTS_SUCCESS,
  GET_CARTS_ERROR,
  GET_CARTS_REQUEST,
  GET_CARTS_RESET,
  GET_CARTS_SUCCESS,
  GET_CART_ERROR,
  GET_CART_REQUEST,
  GET_CART_RESET,
  GET_CART_SUCCESS,
  UPDATE_CARTS_ERROR,
  UPDATE_CARTS_REQUEST,
  UPDATE_CARTS_RESET,
  UPDATE_CARTS_SUCCESS,
} from "../constants/cartsConstant";

export const addToCartReducers = (
  state = { cart: [], loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_CARTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CARTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };
    case CREATE_CARTS_RESET:
      return {
        loading: false,
        success: false,
        cart: [],
        error: null,
      };

    case CREATE_CARTS_ERROR:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getCartsReducers = (
  state = { cart: [], loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_CARTS_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case GET_CARTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };
    case GET_CARTS_RESET:
      return {
        cart: null,
        loading: false,
        success: false,
        error: null,
      };

    case GET_CARTS_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getCartReducers = (
  state = { cart: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };

    case GET_CART_RESET:
      return {
        loading: false,
        cart: null,
        success: false,
        error: null,
      };

    case GET_CART_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateCartReducers = (
  state = { cart: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case UPDATE_CARTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_CARTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };

    case UPDATE_CARTS_RESET:
      return {
        loading: false,
        success: false,
        cart: null,
        error: null,
      };

    case UPDATE_CARTS_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteCartReducers = (
  state = { cart: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case DELETE_CARTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CARTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };
    case DELETE_USER_RESET:
      return {
        loading: false,
        success: false,
        cart: null,
        error: null,
      };

    case DELETE_CARTS_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
