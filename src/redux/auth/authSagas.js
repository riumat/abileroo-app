import { put, takeLatest } from "redux-saga/effects";
import { axiosBase } from "../../utils/axios.config";
import { loginError, loginSuccess } from "./authSlice";
import { formBuilder } from "../../utils/functions";

function* getAuthSaga({ payload }) {
  try {
    const response = yield axiosBase({
      url: "login-token/",
      method: "post",
      data: formBuilder(payload.email, payload.password),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(loginSuccess({
      userInfo: {
        email: payload.email,
        username: payload.email.split("@").at(0),
      },
      token: response.data.token,
    }))
  } catch (error) {
    yield put(loginError());
  }
}


export function* watchGetAuth() {
  yield takeLatest("auth/pending", getAuthSaga)
}