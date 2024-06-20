import { put, select, takeLatest } from "redux-saga/effects"
import { getOrderListError, getOrderListSuccess } from "./orderSlice";
import { axiosBase } from "../../utils/axios.config";

const getOrderListSaga = function* () {
  const { token, userInfo } = yield select(state => state.auth);
  try {
    const res = yield axiosBase(`order/orders/?client_email=${userInfo.email}`, {
      method: "get",
      headers: {
        "Authorization": `Token ${token}`
      }
    })
    yield put(getOrderListSuccess({
      orderList: [...res.data],
    }))
  } catch (error) {
    console.log(error);
    yield put(getOrderListError());
  }
}

export const watchGetOrder = function* () {
  yield takeLatest("order/getOrderList", getOrderListSaga);
}