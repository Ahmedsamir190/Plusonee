import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SetLoading: false,
};

export const Loading = createSlice({
  initialState,
  name: "Loading",
  reducers: {
    UpdateState: (state, action) => {
      state.SetLoading = !state.SetLoading;
    },
  },
});

export const { UpdateState } = Loading.actions;

export default Loading.reducer;
