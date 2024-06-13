import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: null,//shopId
  list: []
}
//todo da rivedere usare lo stato di cart non cart da payload
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const cart = action.payload.cart;
      const { id, name, price, product_image, shop } = action.payload.product;
      const added = [...cart.list, {
        id: id,
        name: name,
        price: price,
        product_image: product_image,
        shop: shop
      }];
      localStorage.setItem("cart", JSON.stringify({ ...{ id: shop }, list: [...added] }));
      state.list = { ...state, list: [...added] };
      state.id = { ...state, id: shop }
    },
    remove: (state, action) => {
      const cart = action.payload.cart;
      const index = action.payload.cart.list.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const removed = [...cart.list];
        removed.splice(index, 1);
        const shopId = removed.length === 0 ? "" : cart.id;
        localStorage.setItem("cart", JSON.stringify({ ...{ id: shopId }, list: [...removed] }));
        return { ...{ id: shopId }, list: [...removed] };
      }
    }
  }
})