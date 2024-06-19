import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  success: JSON.parse(localStorage.getItem("logged")) ?? false,
  error: false,
  userInfo: JSON.parse(localStorage.getItem("credentials")) ?? false,
  token: JSON.parse(localStorage.getItem("token")) ?? null,
  isLoading: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.success = true;
      state.error = false;
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      localStorage.setItem("credentials", JSON.stringify(action.payload.userInfo));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("logged", JSON.stringify(true));
      state.isLoading = false;
    },
    loginError: state => {
      state.success = false;
      state.error = true;
      localStorage.removeItem("credentials");
      localStorage.removeItem("token");
      localStorage.removeItem("logged");
      state.isLoading = false;
    },
    logout: state => {
      state.success = false;
      state.error = false;
      localStorage.removeItem("credentials");
      localStorage.removeItem("token");
      localStorage.removeItem("logged");
      state.isLoading = false;
    },
    pending: (state,action) => {
      state.isLoading = true;
      state.error = false;
    },
    fulfilled: state => {
      state.isLoading = false;
    }
  }
})

export const { loginSuccess, loginError, logout, pending, fulfilled } = authSlice.actions;
export default authSlice.reducer;