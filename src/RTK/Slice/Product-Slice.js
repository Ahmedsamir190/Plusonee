import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productfetch = createAsyncThunk(
  "Getallproducts/productfetch",
  async () => {
    const data = await axios.get("https://api.escuelajs.co/api/v1/products");
    return data.data;
  }
);

const Getallproducts = createSlice({
  initialState: [],
  name: "Getallproducts",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productfetch.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});
export const {} = Getallproducts.actions;
export default Getallproducts.reducer;
