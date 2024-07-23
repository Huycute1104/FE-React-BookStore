import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import cartSlice, { cartMiddleware } from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
