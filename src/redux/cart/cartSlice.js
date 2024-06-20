import { createSlice } from "@reduxjs/toolkit"
import { getCartFormatted, getTotal } from "../../utils/functions"

const initialState = {
  id: JSON.parse(localStorage.getItem("cart"))?.id ?? "",//shopId
  list: JSON.parse(localStorage.getItem("cart"))?.list ?? [],
  listFormatted: JSON.parse(localStorage.getItem("cart"))?.listFormatted ?? [],
  total: JSON.parse(localStorage.getItem("cart"))?.total ?? 0,
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload.product]
      state.id = action.payload.id
      state.listFormatted = getCartFormatted(state.list)
      state.total = getTotal(state.list);
      localStorage.setItem("cart", JSON.stringify({ id: state.id, list: [...state.list], listFormatted: [...state.listFormatted], total: state.total }));

    },
    remove: (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.list.splice(index, 1);
        state.id = state.list.length === 0 ? "" : state.id;
        state.listFormatted = getCartFormatted(state.list)
        state.total = getTotal(state.list);
        localStorage.setItem("cart", JSON.stringify({ id: state.id, list: [...state.list], listFormatted: [...state.listFormatted], total: state.total }))
      }
    },
    deleteAll: state => {
      state.id = "";
      state.list = [];
      state.listFormatted = [];
      state.total = 0;
      localStorage.removeItem("cart");
    },
  }
})

export const { add, remove, deleteAll, setListFormatted, setTotal } = cartSlice.actions;
export default cartSlice.reducer;