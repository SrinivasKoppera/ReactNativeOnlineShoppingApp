import { ADD_TO_CART } from "../actions/addToCartAction";
import { REMOVE_FROM_CART } from "../actions/removeFromCartAction";

const initialCartState = {
  cart: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const isExits = state.cart.find(
        (eachItem) => eachItem.id === action.payload.id
      );
      // console.log("This is isExits or Not :", isExits);
      if (isExits === undefined) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        return { ...state };
      }
    }
    // return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART: {
      const id = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};

export default cartReducer;
