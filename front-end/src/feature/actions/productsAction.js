import axios from "axios";
import {
  PRODUCTS_LIST_ERROR,
  PRODUCTS_LIST_LOADING,
  PRODUCTS_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_LOADING,
  PRODUCT_LIST_SUCCESS,
} from "../constants";

export const listProductsAction = async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LIST_LOADING });
    const { data } = await axios.get("http://localhost:5002/api/products");
    dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_LOADING });
    // const { data } = await axios.get("http://localhost:5002/api/products");

    const { data } = await axios.get(
      `http://localhost:5002/api/products/${id}`
    );

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
