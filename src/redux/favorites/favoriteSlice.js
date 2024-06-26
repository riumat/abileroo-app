import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  isLoading: false,
  error: false,
  ids: JSON.parse(localStorage.getItem("liked")) ?? []
}

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids = [...state.ids, action.payload.id]
      localStorage.setItem("liked", JSON.stringify([...state.ids]));
    },
    removeFavorite: (state, action) => {
      const index = state.ids.indexOf(action.payload.id);
      if (index !== -1) {
        state.ids.splice(index, 1);
      }
      localStorage.setItem("liked", JSON.stringify(state.ids));
    },
    resolveFavorites: (state) => {
      state.isLoading = true;
      state.error = false;

    },
    resolveFavoritesError: state => {
      state.isLoading = false;
      state.error = true;
    },
    resolveFavoritesSuccess: (state, action) => {
      state.list = [...action.payload];
      state.isLoading = false;
      state.error = false;
    },
    orderFavorites: (state, action) => {
      state.list = [...action.payload]
    }
  }

})

export const { addFavorite, removeFavorite, resolveFavorites, resolveFavoritesSuccess, resolveFavoritesError, orderFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;