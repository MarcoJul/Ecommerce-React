import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./cart";

const store = configureStore({
  reducer: CartReducer,
});

export default store;
