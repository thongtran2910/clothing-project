import { CART_ACTIONE_TYPES } from "./cartTypes";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONE_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    case CART_ACTIONE_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTIONE_TYPES.SET_CART_COUNT:
      return { ...state, cartItems: payload };
    case CART_ACTIONE_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
