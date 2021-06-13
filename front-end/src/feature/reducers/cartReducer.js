import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (itm) => itm.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((itm) =>
            itm.product === existItem.product ? item : itm
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (itm) => itm.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
