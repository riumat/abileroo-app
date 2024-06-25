import { put, takeLatest } from "redux-saga/effects"
import { getProductListError, getProductListSuccess } from "./productSlice";
import { getProducts } from "../../utils/fetchers";

const getProductSaga = function* () {
  try {
    const res = yield getProducts(); 
    yield put(getProductListSuccess({
      productList: [...res.data],
    }));
  } catch (error) {
    console.log(error);
    yield put(getProductListError());
  }
}


export const watchGetProduct = function* () {
  yield takeLatest("product/getProductList", getProductSaga)
}