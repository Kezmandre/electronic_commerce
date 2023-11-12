import axios from "axios";
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "../constants";

const url = "http://localhost:5000";
export const loginUserAction = (items) => async (dispatch, state) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });

    const { data } = await axios.post(
      `${url}/users/login`,
      { email: items.email, password: items.password },
      config
    );

    const userInfo = { ...data.payload, token: data.token };

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: userInfo,
    });

    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  } catch (error) {
    let errMessage =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: LOGIN_USER_ERROR,
      payload: errMessage,
    });
  }
};
