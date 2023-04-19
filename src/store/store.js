import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { categoriesSlice } from "./slices/categories";
import { productsSlice } from "./slices/products";

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
  },
  middleware,
});

export default store;
