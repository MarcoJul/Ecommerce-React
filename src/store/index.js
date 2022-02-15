import { createStore } from "redux";

const cartReducer = (
  state = { subTotal: 0, taxes: 0, totalCart: 0 },
  action
) => {
  return state;
};

const store = createStore(cartReducer);

export default store;
