import { put, takeLatest } from "redux-saga/effects";
import { getShopError, getShopListError, getShopListSuccess, getShopSuccess } from "./shopSlice";
import { getShopFromId, getShopFromQuery } from "../../utils/fetchers";

const getShopListSaga = function* ({ payload }) {
  const query = payload ?? "";
  try {
    const res = yield getShopFromQuery(query);

    yield put(getShopListSuccess({
      shopList: [...res.data]
    }))
  } catch (error) {
    console.log(error)
    yield put(getShopListError());
  }
}

const getShopSaga = function* ({ payload }) {
  try {
    const res = yield getShopFromId(payload);
    yield put(getShopSuccess({
      shop: {
        id: res.data.id,
        name: res.data.name,
        address: res.data.address.split(","),
        description: res.data.description,
        image: process.env.REACT_APP_BASE_URL + res.data.image,
        products: [...res.data.products].map(product => (
          { ...product, product_image: process.env.REACT_APP_BASE_URL + product.product_image }
        )),
      }
    }))
  } catch (error) {
    console.log(error);
    yield put(getShopError());
  }
}




export const watchGetShop = function* () {
  yield takeLatest("shop/getShopList", getShopListSaga);
  yield takeLatest("shop/getShop", getShopSaga)
}