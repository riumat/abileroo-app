import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  success: false,
  productList: [],
  error: false,
  isLoading: false,

}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductListSuccess: (state, action) => {
      state.success = true;
      state.error = false;
      state.productList = [...action.payload.productList];
      state.isLoading = false;
    },
    getProductListError: state => {
      state.success = false;
      state.error = true;
      state.isLoading = false;
    },
    getProductList: state => {
      state.isLoading = true;
      state.error = false;
    },
    orderProductList: (state, action) => {
      state.productList = [...action.payload]
    },

  }
})

export const { getProductList, getProductListSuccess, getProductListError, orderProductList } = productSlice.actions;
export default productSlice.reducer;

