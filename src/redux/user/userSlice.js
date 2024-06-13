import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: null,
  username: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.username = action.payload;
    },
    logout: state => {
      state.email = null;
      state.username = null;
    }
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;