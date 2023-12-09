import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import productReducer from "./productSlice";
import popupReducer from "./popupSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    product: productReducer,
    popup: popupReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
