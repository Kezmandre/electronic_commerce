import axios from "axios";
import {
  CREATE_FAVORITE_ERROR,
  CREATE_FAVORITE_REQUEST,
  CREATE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_ERROR,
  DELETE_FAVORITE_REQUEST,
  DELETE_FAVORITE_SUCCESS,
  GET_FAVORITES_ERROR,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
} from "../constants";
import { Logout } from "./user";

const Base_url = process.env.NODE_ENV === "production" ? "" : "http://localhost:5000"

export const addToFavoriteAction = (productId) => async (dispatch, state) => {
  const {
    loginUser: { user },
  } = state();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  };

  try {
    dispatch({
      type: CREATE_FAVORITE_REQUEST,
    });

    const { data } = await axios.post(`${Base_url}/favorite`, { productId }, config);

    dispatch({
      type: CREATE_FAVORITE_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        if(message.includes("jwt")){
          dispatch(Logout())
        }
    dispatch({
      type: CREATE_FAVORITE_ERROR,
      payload: message,
    });
  }
};

export const getAllFavoritesAction = () => async (dispatch, state) => {
  const {
    loginUser: { user },
  } = state();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  };

  try {
    dispatch({
      type: GET_FAVORITES_REQUEST,
    });

    const { data } = await axios.get(`${Base_url}/favorite`, config);
    dispatch({
      type: GET_FAVORITES_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        if(message.includes("jwt")){
          dispatch(Logout())
        }
    dispatch({
      type: GET_FAVORITES_ERROR,
      payload: message,
    });
  }
};

export const deleteFavoriteAction = (favoriteId) => async (dispatch, state) => {
  const {
    loginUser: { user },
  } = state();

  const config = {
    headers: {
      Content_type: "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  };

  try {
    dispatch({ type: DELETE_FAVORITE_REQUEST });

    const { data } = await axios.delete(
      `${Base_url}/favorite/${favoriteId}`,
      config
    );

    dispatch({
      type: DELETE_FAVORITE_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        if(message.includes("jwt")){
          dispatch(Logout())
        }
        dispatch({
          type:DELETE_FAVORITE_ERROR,
          payload:message
        })
  }
};
