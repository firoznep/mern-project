import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { productListReducer, productReducer } from "./reducers/productsReducer";

const reducers = combineReducers({
  productsList: productListReducer,
  singleProduct: productReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const middleware = [thunk];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
