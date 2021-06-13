import {
  PRODUCTS_LIST_ERROR,
  PRODUCTS_LIST_LOADING,
  PRODUCTS_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_LOADING,
  PRODUCT_LIST_SUCCESS,
} from "../constants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_LOADING:
      return { loading: true, ...state };
    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_LIST_ERROR:
      return { loading: false, products: action.payload };
    default:
      return state;
  }
};

export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_LOADING:
      return { loading: true, ...state };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_LIST_ERROR:
      return { loading: false, product: action.payload };
    default:
      return state;
  }
};

// export default productsReducer;
