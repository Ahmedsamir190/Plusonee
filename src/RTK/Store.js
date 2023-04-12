import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Slice/Auth";
import cartSlice from "./Slice/cartSlice";
import Loading from "./Slice/Loading";
import PassToggle from "./Slice/PassToggle";
import ProductSlice from "./Slice/Product-Slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: ProductSlice,
    PassToggle: PassToggle,
    authSlice: authSlice,
    Loading: Loading,
  },
});
