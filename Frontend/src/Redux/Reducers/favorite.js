import {
  CREATE_FAVORITE_ERROR,
  CREATE_FAVORITE_REQUEST,
  CREATE_FAVORITE_RESET,
  CREATE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_ERROR,
  DELETE_FAVORITE_REQUEST,
  DELETE_FAVORITE_RESET,
  DELETE_FAVORITE_SUCCESS,
  GET_FAVORITES_ERROR,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_RESET,
  GET_FAVORITES_SUCCESS,
} from "../constants";

export const createFavoriteReducer = (
  state = { favorite: [], loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        favorite: action.payload,
      };

    case CREATE_FAVORITE_RESET:
      return {
        loading: false,
        success: false,
        error: null,
        favorite: [],
      };

    case CREATE_FAVORITE_ERROR:
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

export const getAllFavoriteReducer = (
  state = { favorite: [], favoriteCount:0, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_FAVORITES_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        favorite: action.payload,
        favoriteCount: action.payload.length
      };

    case GET_FAVORITES_RESET:
      return {
        loading: false,
        error: null,
        favorite: [],
        success: false,
      };

    case GET_FAVORITES_ERROR:
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

export const deleteFavoriteReducer = (
  state = { favorite: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case DELETE_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        favorite: action.payload,
      };

    case DELETE_FAVORITE_RESET:
      return {
        loading: false,
        success: false,
        error: null,
        favorite: null,
      };

    case DELETE_FAVORITE_ERROR:
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
