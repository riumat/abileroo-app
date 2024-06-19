import { put, takeLatest } from "redux-saga/effects";
import { axiosBase } from "../../utils/axios.config";
import { getLoginError, getLoginSuccess } from "./authSlice";
import { formBuilder } from "../../utils/functions";

const getAuthSaga = function* ({ payload }) {
  try {
    const response = yield axiosBase({
      url: "login-token/",
      method: "post",
      data: formBuilder(payload.email, payload.password),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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