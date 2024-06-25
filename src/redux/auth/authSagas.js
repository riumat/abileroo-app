import { put, takeLatest } from "redux-saga/effects";
import { getLoginError, getLoginSuccess } from "./authSlice";
import { sendCredentials } from "../../utils/fetchers";

const getAuthSaga = function* ({ payload }) {
  try {
    const response = yield sendCredentials(payload);
    yield put(getLoginSuccess({
      userInfo: {
        email: payload.email,
        username: payload.email.split("@").at(0),
      },
      token: response.data.token,
    }))
  } catch (error) {
    console.log(error)
    yield put(getLoginError());
  }
}


export const watchGetAuth = function* () {
  yield takeLatest("auth/getLogin", getAuthSaga)
}