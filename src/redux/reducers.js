import cartReducer from "./cart/cartSlice"
import orderReducer from "./order/orderSlice"
import favoriteReducer from "./favorites/favoriteSlice";
import authReducer from "./auth/authSlice";

const rootReducers = {
  cart:cartReducer,
  order:orderReducer,
  favorites:favoriteReducer,
  auth:authReducer
}

export default rootReducers;