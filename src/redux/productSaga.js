import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:4000/products");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}
function* searchProducts(data) {
  console.log("query in search = ", data.query);
  let result = yield fetch(
    `http://localhost:4000/products?query=${data.query}`
  );
  result = yield result.json();

  console.log(" search query result data = ", result);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(PRODUCT_SEARCH, searchProducts);
}

export default productSaga;
