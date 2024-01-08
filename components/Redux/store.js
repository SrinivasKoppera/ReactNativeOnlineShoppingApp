import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
