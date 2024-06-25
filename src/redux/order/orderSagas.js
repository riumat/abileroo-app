import { put, select, takeLatest } from "redux-saga/effects"
import { getOrderListError, getOrderListSuccess } from "./orderSlice";
import { getOrdersFromEmail } from "../../utils/fetchers";

const getOrderListSaga = function* () {
  const { token, userInfo } = yield select(state => state.auth);
  try {
    const res = yield getOrdersFromEmail(userInfo.email, token)
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