import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOpen: (state: any) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpen } = popupSlice.actions;
export default popupSlice.reducer;
