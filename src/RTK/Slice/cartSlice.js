import { createSlice } from "@reduxjs/toolkit";

// export const fetchproduct = createAsyncThunk(
//   "cartSlice/fetchproduct",
//   async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     return data;
//   }
// );
const initialState = {
  cartProduct: localStorage.getItem("cartSlice")
    ? JSON.parse(localStorage.getItem("cartSlice"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addtocart: (state, action) => {
      const productscart = state.cartProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productscart >= 0) {
        state.cartProduct[productscart].quantity += 1;
      } else {
        const clone = { ...action.payload, quantity: 1 };
        state.cartProduct.push(clone);
      }
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },

    Deleted: (state, action) => {
      const removeItem = state.cartProduct.filter(
        (product) => product.id !== action.payload.id
      );
      state.cartProduct = removeItem;
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },
    Clear: (state, action) => {
      state.cartProduct = [];
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },
    Increment: (state, action) => {
      const itemincrement = state.cartProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (itemincrement >= 0) {
        state.cartProduct[itemincrement].quantity += 1;
      }
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },
    Decrement: (state, action) => {
      const itemdecrement = state.cartProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cartProduct[itemdecrement].quantity > 1) {
        state.cartProduct[itemdecrement].quantity -= 1;
      }
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },

    GetTotalPrice: (state, action) => {
      const totalPrice = state.cartProduct.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
      }, 0);
      state.cartTotalAmount = totalPrice;
    },

    GetTotalQuantity: (state, action) => {
      const totalquantity = state.cartProduct.reduce(
        (cartquantity, cartitem) => {
          return cartquantity + cartitem.quantity;
        },
        0
      );
      state.cartTotalQuantity = totalquantity;
    },
  },
});

export const {
  addtocart,
  Deleted,
  Clear,
  Increment,
  Decrement,
  GetTotalPrice,
  GetTotalQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
