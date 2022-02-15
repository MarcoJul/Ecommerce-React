import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartAction = cartSlice.actions;
export default store;
