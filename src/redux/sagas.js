import { all, fork } from "redux-saga/effects"
import { watchGetAuth } from "./auth/authSagas"
import { watchGetShop } from "./shop/shopSagas"
import { watchGetProduct } from "./product/productSaga"
import { watchGetOrder } from "./order/orderSagas"

export const sagas = function* () {
  yield all([
    fork(watchGetAuth),
    fork(watchGetShop),
    fork(watchGetProduct),
    fork(watchGetOrder),
  ])
}