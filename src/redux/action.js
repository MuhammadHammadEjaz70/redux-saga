import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("action called--> inside action.js", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("remove from cart--->action.js", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  console.log("empty cart--->action.js");
  return {
    type: EMPTY_CART,
  };
};
