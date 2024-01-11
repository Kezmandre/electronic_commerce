import axios from "axios";
import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESET,
  LOGIN_USER_SUCCESS,
} from "../constants";
import { toast } from "react-toastify";





export const Logout=()=>async(dispatch, state)=>{
  dispatch({
    type:LOGIN_USER_RESET
  })
  localStorage.setItem("userInfo",null)
  toast.success("Logged out")
}

export const loginUserAction = (items) => async (dispatch, state) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });

    const { data } = await axios.post(
      `/users/login`,
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
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });

  }
};




export const createUserAction = (items) => async (dispatch, state) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({
      type: CREATE_USER_REQUEST,
    });

    const { data } = await axios.post(
      `/users`,
      {name:items.name, email: items.email, password: items.password },
      config
    );

    const createUserInfo = { ...data.payload};

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: createUserInfo,
    });

    localStorage.setItem("createUserInfo", JSON.stringify(createUserInfo))
  } catch (error) {
    let errMessage =
      error.response && error.response.data.error
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: CREATE_USER_ERROR,
      payload: errMessage,
    });
  }
};