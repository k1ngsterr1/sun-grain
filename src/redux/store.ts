import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
// import popupReducer from "./popupSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    product: productReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
