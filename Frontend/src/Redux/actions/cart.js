import axios from "axios";
import {
  CREATE_CARTS_ERROR,
  CREATE_CARTS_REQUEST,
  CREATE_CARTS_SUCCESS,
} from "../constants/cartsConstant";

const url = "http://localhost:5000";

export const addToCartActions = (productId) => async (dispatch, state) => {
  console.log(productId,"iddddd")
  // const {product, quantity} = items
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({
      type: CREATE_CARTS_REQUEST,
    });

    const data = await axios.post(
      `${url}/cart`,
      {
        productId
        
      },
      config
    );
    console.log("data", data);
    dispatch({
      type: CREATE_CARTS_SUCCESS,
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
      type: CREATE_CARTS_ERROR,
      payload: errMessage,
    });
  }
};
