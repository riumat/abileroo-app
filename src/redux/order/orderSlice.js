import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: JSON.parse(localStorage.getItem("orders")) ?? [],
  checkout: null,
}
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list = [...state.list, action.payload.order]
      localStorage.setItem("order", JSON.stringify([...state.list]));
    },

    getList: (state, action) => {
      state.list = [...action.payload.list];
      localStorage.setItem("order", JSON.stringify([...state.list]));
    },
    setCheckout: (state, action) => {
      state.checkout = { ...action.payload.checkout };
    }
  }
}
)

export const { addToList, getList, setCheckout } = orderSlice.actions;
export default orderSlice.reducer;