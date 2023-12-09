import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productState: "",
  },
  reducers: {
    setProduct: (state, action: PayloadAction<string>) => {
      state.productState = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
