import cartReducer from "./reducers/cart";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cartReducer,
  },
  devTools: true,
});

export default store;