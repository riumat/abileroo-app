import { put, takeLatest } from "redux-saga/effects"
import { axiosBase } from "../../utils/axios.config"
import { getProductListError, getProductListSuccess } from "./productSlice";

const getProductSaga = function* () {
  try {
    const res = yield axiosBase.get("product/products/"); 
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