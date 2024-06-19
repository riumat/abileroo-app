import cartReducer from "./cart/cartSlice"
import orderReducer from "./order/orderSlice"
import favoriteReducer from "./favorites/favoriteSlice";
import authReducer from "./auth/authSlice";
import shopReducer from "./shop/shopSlice"

const rootReducers = {
  cart: cartReducer,
  order: orderReducer,
  favorites: favoriteReducer,
  auth: authReducer,
  shop: shopReducer
}

export default rootReducers;