import { PRODUCT_LIST, PRODUCT_SEARCH } from "./constant";

export const productListing = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const productSearch = (query) => {
  console.log("product_search action payload = ", query);
  return {
    type: PRODUCT_SEARCH,
    query,
  };
};
