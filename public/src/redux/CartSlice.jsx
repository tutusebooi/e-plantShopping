import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);

      if (existing) {
        existing.quantity++;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity++;
    },

    increase(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
    },

    decrease(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
      }
    },

    removeItem(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increase, decrease, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
