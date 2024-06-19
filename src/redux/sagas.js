import { all, fork } from "redux-saga/effects"
import { watchGetAuth } from "./auth/authSagas"
import { watchGetShop } from "./shop/shopSagas"

export const sagas = function* () {
  yield all([
    fork(watchGetAuth),
    fork(watchGetShop),
  ])
}