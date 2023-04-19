import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    getProductSuccess: (state, action) => {
      
      const { products } = action.payload;
      products.forEach((product) => {
        const { category, name } = product;
        if (!state[category]) {
          state[category] = {};
        }
        if (!state[category][name]) {
          state[category][name] = 1;
        } else {
          state[category][name]++;
        }
      });
    },
    getProductFailure: (state, action) => {
      console.log("error in getting products");
      // Handle error state here if necessary
    },
    addProductSuccess: (state, action) => {
      const { product } = action.payload;
      const { category, name } = product;
      if (!state[category]) {
        state[category] = {};
      }
      if (!state[category][name]) {
        state[category][name] = 1;
      } else {
        state[category][name]++;
      }
    },
    addProductFailure: (state, action) => {
      console.log("error in adding product");
      // Handle error state here if necessary
    },
  },
});

export const {
  getProductSuccess,
  getProductFailure,
  addProductSuccess,
  addProductFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
