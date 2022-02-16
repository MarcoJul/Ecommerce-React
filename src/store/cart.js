import { createSlice } from "@reduxjs/toolkit";
const initialState = { subTotal: 0, taxes: 0, totalCart: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment(state) {
      state.totalCart++;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
