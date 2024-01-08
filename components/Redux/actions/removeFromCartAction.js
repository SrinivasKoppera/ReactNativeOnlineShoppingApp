export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export default removeFromCart;
