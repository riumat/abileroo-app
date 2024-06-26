import { put, select, takeLatest } from "redux-saga/effects"
import { getOrderListError, getOrderListSuccess, sendOrderSuccess } from "./orderSlice";
import { getOrdersFromEmail, postOrder } from "../../utils/fetchers";
import { deleteAll } from "../cart/cartSlice";

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

const sendOrderSaga = function* ({ payload }) {
  try {
    const res = yield postOrder(payload);
    if (res.status === 201) {
      yield put(sendOrderSuccess());
      yield put(deleteAll());
    } else {
      yield put(getOrderListError());
    }
  } catch (error) {
    console.log(error);
    yield put(getOrderListError());
  }
}

export const watchGetOrder = function* () {
  yield takeLatest("order/getOrderList", getOrderListSaga);
  yield takeLatest("order/sendOrder", sendOrderSaga);
}