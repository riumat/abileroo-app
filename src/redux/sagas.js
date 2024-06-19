import { all, fork } from "redux-saga/effects"
import { watchGetAuth } from "./auth/authSagas"

export const sagas = function* () {
  yield all([
    fork(watchGetAuth),
  ])
}