import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"
import cartReducer from "./cart/cartSlice"
import orderReducer from "./order/orderSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
  }
})