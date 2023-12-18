import { DELETE_USER_RESET } from "../constants";
import {
  CREATE_CARTS_ERROR,
  CREATE_CARTS_REQUEST,
  CREATE_CARTS_RESET,
  CREATE_CARTS_SUCCESS,
  DECREASE_CARTS_REQUEST,
  DECREASE_CARTS_RESET,
  DECREASE_CARTS_SUCCESS,
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
  INCREASE_CARTS_ERROR,
  INCREASE_CARTS_REQUEST,
  INCREASE_CARTS_SUCCESS,
} from "../constants/cartsConstant";

export const addToCartReducers = (
  state = {
    cart: [],

    loading: false,
    success: false,
    error: null,
  },
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
  state = {
    carts: [],
    cartCount: 0,
    loading: false,
    success: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case GET_CARTS_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case GET_CARTS_SUCCESS:
      console.log(action.payload, "payload lllllllllllllllllllllllll");
      return {
        ...state,
        loading: false,
        success: true,
        carts: action.payload,
        cartCount: action.payload.length,
      };
    case GET_CARTS_RESET:
      return {
        carts: null,
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

export const updateCartQuantityReducers = (
  state = { cart: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case INCREASE_CARTS_REQUEST:
      case DECREASE_CARTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case INCREASE_CARTS_SUCCESS:
      case DECREASE_CARTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload.updateCart,
      };

    case INCREASE_CARTS_REQUEST:
      case DECREASE_CARTS_RESET:
      return {
        loading: false,
        success: false,
        cart: null,
        error: null,
      };

    case INCREASE_CARTS_ERROR:
      case DECREASE_CARTS_ERROR:
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
