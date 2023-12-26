import axios from "axios";
import {
  CREATE_FAVORITE_ERROR,
  CREATE_FAVORITE_REQUEST,
  CREATE_FAVORITE_SUCCESS,
} from "../constants";

const url = "http://localhost:5000";

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

    const { data } = await axios.post(`${url}/favorite`, { productId }, config);

    dispatch({
      type: CREATE_FAVORITE_SUCCESS,
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
      type: CREATE_FAVORITE_ERROR,
      payload: errMessage,
    });
  }
};
