import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  shopList: [],
  error: false,
  isLoading: false,
  shop: null
}

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getShopListSuccess: (state, action) => {
      state.success = true;
      state.error = false;
      state.shopList = [...action.payload.shopList];
      state.isLoading = false;
    },
    getShopListError: state => {
      state.success = false;
      state.error = true;
      state.isLoading = false;
    },
    getShopList: state => {
      state.isLoading = true;
      state.error = false;
    },
    orderShopList: (state, action) => {
      state.shopList = [...action.payload]
    },
    getShopSuccess: (state, action) => {
      state.success = true;
      state.error = false;
      state.shop = { ...action.payload.shop };
      state.isLoading = false;
    },
    getShopError: state => {
      state.success = false;
      state.error = true;
      state.isLoading = false;
    },
    getShop: state => {
      state.isLoading = true;
      state.error = false;
    },

  }
})

export const { getShopList, getShopListSuccess, getShopListError, orderShopList, getShopSuccess, getShopError, getShop } = shopSlice.actions;
export default shopSlice.reducer;