import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../constants";
import { useParams } from "react-router-dom";
import { Logout } from "./user";

// const {productId}= useParams

const Base_url = process.env.NODE_ENV === "production" ? "" : "http://localhost:5000"

export const getProductActions = () => async(dispatch, state) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });

    const { data } = await axios.get(`${Base_url}/product`, config);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
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
      type: GET_PRODUCTS_ERROR,
      payload: message,
    });
  }
};


export const singleProductActions=({productId})=>async(dispatch, state)=>{
    console.log(productId)
    const config ={
        header:{
            "Content-Type":"application/json"
        }
    }
    try {
        dispatch({
            type:GET_PRODUCT_REQUEST
        })

        const {data}= await axios.get(`${Base_url}/product/${productId}`,config)
        dispatch({
            type:GET_PRODUCT_SUCCESS,
            payload:data.payload
        })
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
            type:GET_PRODUCT_ERROR,
            payload:message
        })
    }
}