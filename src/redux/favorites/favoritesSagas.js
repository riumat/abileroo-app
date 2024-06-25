import { put, select, takeLatest } from "redux-saga/effects"
import { resolveFavoritesError, resolveFavoritesSuccess } from "./favoriteSlice";
import { setShopImage } from "../../utils/functions";
import { getShopFromId } from "../../utils/fetchers";

const getFavoritesSagas = function* () {
  const favorites = yield select(state => state.favorites.ids)

  try {
    const promises = yield Promise.all(favorites.map(shopId => getShopFromId(shopId))) //`shop/shop/${shopId}`  shopUrls[shopId - 1]
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