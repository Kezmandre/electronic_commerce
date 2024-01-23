import axios from "axios";
import {
  CREATE_CARTS_ERROR,
  CREATE_CARTS_REQUEST,
  CREATE_CARTS_SUCCESS,
  DECREASE_CARTS_ERROR,
  DECREASE_CARTS_REQUEST,
  DECREASE_CARTS_SUCCESS,
  DELETE_CARTS_ERROR,
  DELETE_CARTS_REQUEST,
  DELETE_CARTS_SUCCESS,
  GET_CARTS_ERROR,
  GET_CARTS_REQUEST,
  GET_CARTS_SUCCESS,
  INCREASE_CARTS_ERROR,
  INCREASE_CARTS_REQUEST,
  INCREASE_CARTS_SUCCESS,
} from "../constants/cartsConstant";
import { Logout } from "./user";

const Base_url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";

export const addToCartActions = (productId) => async (dispatch, state) => {
  // const {product, quantity} = items
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
      type: CREATE_CARTS_REQUEST,
    });

    const { data } = await axios.post(
      `${Base_url}/cart`,
      {
        productId,
      },
      config
    );
    console.log("data", data);
    dispatch({
      type: CREATE_CARTS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    console.log(error, "err");
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message.includes("jwt")) {
      dispatch(Logout());
    }
    dispatch({
      type: CREATE_CARTS_ERROR,
      payload: message,
    });
  }
};

export const getCartActions = () => async (dispatch, state) => {
  const {
    loginUser: { user },
  } = state();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token} `,
    },
  };

  try {
    dispatch({
      type: GET_CARTS_REQUEST,
    });

    const { data } = await axios.get(`${Base_url}/cart`, config);
    console.log(data, "datum");
    dispatch({
      type: GET_CARTS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message.includes("jwt")) {
      dispatch(Logout());
    }
    dispatch({
      type: GET_CARTS_ERROR,
      payload: message,
    });
  }
};

export const increaseCartAction = (cartId) => async (dispatch, state) => {
  const {
    loginUser: { user },
  } = state();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token} `,
    },
  };

  try {
    dispatch({
      type: INCREASE_CARTS_REQUEST,
    });
    const { data } = await axios.patch(
      `${Base_url}/cart/${cartId}`,
      { type: "increase" },
      config
    );
   
    dispatch({
      type: INCREASE_CARTS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let errMessage =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INCREASE_CARTS_ERROR,
      payload: errMessage,
    });
  }
};

export const decreaseCartAction = (cartId) => async (dispatch, state) => {
  const {
    loginUser: { user },
  } = state();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token} `,
    },
  };

  try {
    dispatch({
      type: DECREASE_CARTS_REQUEST,
    });
    const { data } = await axios.patch(
      `${Base_url}/cart/${cartId}`,
      { type: "decrease" },
      config
    );
    dispatch({
      type: DECREASE_CARTS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let errMessage =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DECREASE_CARTS_ERROR,
      payload: errMessage,
    });
  }
};

export const deleteCartAction = (cartId) => async (dispatch, state) => {
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
      type: DELETE_CARTS_REQUEST,
    });

    const { data } = await axios.delete(`${Base_url}/cart/${cartId}`, config);
    dispatch({
      type: DELETE_CARTS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (message.includes("jwt")) {
      dispatch(Logout());
    }

    dispatch({
      type: DELETE_CARTS_ERROR,
      message: message,
    });
  }
};
