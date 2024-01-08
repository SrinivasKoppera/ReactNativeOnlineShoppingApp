import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_REQUEST,
} from "../actions/getProductsAction";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

const productsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { isLoading: false, products: actions.payload, error: "" };
    case FETCH_PRODUCTS_FAILURE:
      return { isLoading: false, error: actions.payload, products: [] };
    default:
      return state;
  }
};

export default productsReducer;
