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

const {productId}= useParams



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

    const { data } = await axios.get(`/product`, config);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
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
      type: GET_PRODUCTS_ERROR,
      payload: errMessage,
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

        const {data}= await axios.get(`/product/${productId}`,config)
        console.log(data, "dataaa")
        dispatch({
            type:GET_PRODUCT_SUCCESS,
            payload:data.payload
        })
    } catch (error) {
        let errMessage =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({
            type:GET_PRODUCT_ERROR,
            payload:errMessage
        })
    }
}