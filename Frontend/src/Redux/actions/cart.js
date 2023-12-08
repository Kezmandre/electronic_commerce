import axios from "axios";
import {
  CREATE_CARTS_ERROR,
  CREATE_CARTS_REQUEST,
  CREATE_CARTS_SUCCESS,
  GET_CARTS_ERROR,
  GET_CARTS_REQUEST,
  GET_CARTS_SUCCESS,
} from "../constants/cartsConstant";

const url = "http://localhost:5000";

export const addToCartActions = (productId) => async (dispatch, state) => {
  console.log(productId, "iddddd");
  // const {product, quantity} = items
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmZhNTNmNGViNTFkZDZjNzQyMGNhMiIsImVtYWlsIjoibGFxdWFkQGdtYWlsLmNvbSIsImlhdCI6MTcwMTk0NjU4NCwiZXhwIjoxNzAyMDMyOTg0fQ.uFx0hByOPcNQyEUKit4J04eOVWnJ9GUP8xSHWUbMJVk`,
    },
  };

  try {
    dispatch({
      type: CREATE_CARTS_REQUEST,
    });

    const { data } = await axios.post(
      `${url}/cart`,
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
    let errMessage =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CREATE_CARTS_ERROR,
      payload: errMessage,
    });
  }
};

export const getCartActions = () => async (dispatch, state) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmZhNTNmNGViNTFkZDZjNzQyMGNhMiIsImVtYWlsIjoibGFxdWFkQGdtYWlsLmNvbSIsImlhdCI6MTcwMTk0NjU4NCwiZXhwIjoxNzAyMDMyOTg0fQ.uFx0hByOPcNQyEUKit4J04eOVWnJ9GUP8xSHWUbMJVk `,
    },
  };

  try {
    dispatch({
      type: GET_CARTS_REQUEST,
    });

    const { data } = await axios.get(`${url}/cart`, config);
    console.log(data, "datum")
    dispatch({
      type: GET_CARTS_SUCCESS,
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
          type: GET_CARTS_ERROR,
          payload: errMessage,
        })
  }
};
