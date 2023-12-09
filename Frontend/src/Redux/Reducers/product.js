import {
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_RESET,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_RESET,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_RESET,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_RESET,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_RESET,
  UPDATE_PRODUCT_SUCCESS,

} from "../constants";

export const createProductReducer = (
  state = { product: null, success: false, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };

    case CREATE_PRODUCT_RESET:
      return {
        loading: false,
        success: false,
        error: null,
        product: null,
      };

    case CREATE_PRODUCT_ERROR:
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

export const getProductReducer = (
  state = { product: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };

    case GET_PRODUCT_RESET:
      return {
        loading: false,
        success: false,
        product: null,
        error: null,
      };
    case GET_PRODUCT_ERROR:
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

export const getProductsReducer = (
  state = { product: [], loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };
    case GET_PRODUCTS_RESET:
      return {
        loading: false,
        success: false,
        product: [],
        error: null,
      };

    case GET_PRODUCTS_ERROR:
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

export const updateProductReducer = (
  state = { product: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.payload) {
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };

    case UPDATE_PRODUCT_RESET:
      return {
        loading: false,
        success: false,
        product: null,
        error: null,
      };

    case UPDATE_PRODUCT_ERROR:
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

export const deleteProductReducer = (
  state = { product: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };
    case DELETE_PRODUCT_RESET:
      return {
        loading: false,
        success: false,
        product: null,
        error: null,
      };
    case DELETE_PRODUCT_ERROR:
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
