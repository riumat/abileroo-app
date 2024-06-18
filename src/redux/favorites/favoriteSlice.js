import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: JSON.parse(localStorage.getItem("liked")) ?? [],
}
export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.list = [...state.list, action.payload.id]
      localStorage.setItem("liked", JSON.stringify([...state.list]));
    },
    removeFavorite: (state, action) => {
      const index = state.list.indexOf(action.payload.id);
      if (index !== -1) {
        state.list.splice(index, 1);
      }
      localStorage.setItem("liked", JSON.stringify(state.list));
    },
  }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;