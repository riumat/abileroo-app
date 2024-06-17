import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: JSON.parse(localStorage.getItem("cart"))?.id ?? "",//shopId
  list: JSON.parse(localStorage.getItem("cart"))?.list ?? [],
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload.product]
      state.id = action.payload.id
      localStorage.setItem("cart", JSON.stringify({ id: state.id, list: [...state.list] }));
    },
    remove: (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.list.splice(index, 1);
        state.id = state.list.length === 0 ? "" : state.id;
        localStorage.setItem("cart", JSON.stringify({ id: state.id, list: [...state.list] }))
      }
    },
    deleteAll: state => {
      state.id = "";
      state.list = [];
    }
  }
})

export const { add, remove, deleteAll } = cartSlice.actions;
export default cartSlice.reducer;