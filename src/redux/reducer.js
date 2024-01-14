import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //add to cart logic
      console.log("add to cart reducer called", action);
      return [...data, action.data];

    case REMOVE_FROM_CART:
      //REMOVE to cart logic
      console.log("REMOVE to cart reducer called", action);
      //   data.length = data.length ? data.length - 1 : [];
      // let newData = data.slice(0, -1);
      const remainingItem = data.filter((item) => item.id !== action.data);
      return [...remainingItem];

    case EMPTY_CART:
      console.log("empty cart reducer called", action);
      return (data = []);
    default:
      // no case matched
      return data;
  }
};
