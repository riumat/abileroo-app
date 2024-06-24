import { put, select, takeLatest } from "redux-saga/effects"
import { axiosBase } from "../../utils/axios.config";
import { resolveFavoritesError, resolveFavoritesSuccess } from "./favoriteSlice";
import { setShopImage } from "../../utils/functions";
//todo bug nel fetch
const getFavoritesSagas = function* () {
  const favorites = yield select(state => state.favorites.ids)
  console.log(favorites)
  try {
    const promises = yield Promise.all(favorites.map(shopId => axiosBase.get(`shop/shop/${shopId}`))) //`shop/shop/${shopId}`  shopUrls[shopId - 1]
    const data = yield Promise.all(promises.map(res => res.data));
    yield put(resolveFavoritesSuccess(([...data].map(shop => ({ ...shop, image: setShopImage(shop.image) })))));
  } catch (error) {
    yield put(resolveFavoritesError());
    console.log(error)
  }
}



export const watchFavoritesSagas = function* () {
  yield takeLatest("favorites/resolveFavorites", getFavoritesSagas)
}