export const ADD_TO_CART = "ADD_TO_CART";

const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export default addToCart;
