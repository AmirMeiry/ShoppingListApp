import axios from "axios";
import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "./productTypes";

export const addProductRequest = () => {
  return { type: "ADD_PRODUCT_REQUEST" };
};

export const addProductSuccess = (product) => {
  return { type: "ADD_PRODUCT_SUCCESS", payload: product };
};

export const addProductFailure = (error) => {
  return { type: "ADD_PRODUCT_FAILURE", payload: error };
};

export const getProductRequest = () => {
  return { type: "GET_PRODUCT_REQUEST" };
};

export const getProductSuccess = (product) => {
  return { type: "GET_PRODUCT_SUCCESS", payload: product };
};

export const getProductFailure = (error) => {
  return { type: "GET_PRODUCT_FAILURE", payload: error };
};

export const getTotalItems = (totalItems) => {
  return { type: "GET_TOTAL_PRODUCT_QUANTITY", payload: totalItems };
};

export const addProduct = (category, productName) => {
  return (dispatch) => {
    dispatch(addProductRequest());

    axios
      .post("https://localhost:7195/Products/AddProducts", null, {
        params: { category, productName },
      })
      .then((response) => {
        const product = response.data;
        dispatch(addProductSuccess(product));
      })
      .catch((error) => {
        dispatch(addProductFailure(error.message));
      });
  };
};

export const getProduct = () => {
  return async (dispatch) => {
    dispatch(getProductRequest());

    return axios
      .get("https://localhost:7195/Products/GetProducts", null, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        const products = response.data;
        dispatch(getProductSuccess(products));
        return products;
      })
      .catch((error) => {
        console.log(error);
        dispatch(getProductFailure(error.message));
        throw error;
      });
  };
};
