import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  orderList: JSON.parse(localStorage.getItem("orders")) ?? [],
  checkout: null,
  success: false,
  isLoading: false,
  error: false,
}
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.orderList = [...state.orderList, action.payload.order]
      localStorage.setItem("order", JSON.stringify([...state.orderList]));
    },
    getOrderListSuccess: (state, action) => {
      state.checkout = [...action.payload.list];
      localStorage.setItem("order", JSON.stringify([...state.orderList]));
    },
    getOrderListError: state => {
      state.error = true;
      state.isLoading = false;
    },
    getOrderList: state => {
      state.error = false;
      state.isLoading = true;
    },
    setCheckout: (state, action) => {
      state.checkout = { ...action.payload.checkout };
      state.error = false;
      state.success = false;
    },
    sendOrder: state => {
      state.error = false;
      state.isLoading = true;
    },
    sendOrderSuccess: state => {
      state.success = true;
      state.error = false;
      state.isLoading = false;
      state.checkout = null;
    }
  }
})

export const { addToList, getOrderListSuccess, getOrderListError, getOrderList, setCheckout, sendOrder, sendOrderSuccess } = orderSlice.actions;
export default orderSlice.reducer;