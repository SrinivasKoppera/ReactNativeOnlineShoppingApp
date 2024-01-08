import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

const getProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

const getProductsSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

const getProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

const getProducts = () => {
  return async function (dispatch) {
    dispatch(getProductsRequest());
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      dispatch(getProductsFailure(error));
    }
  };
};

export default getProducts;
