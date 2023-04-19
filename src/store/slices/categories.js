import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    setCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    setCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(categoriesSlice.actions.setCategoriesRequest());

    axios
      .get("https://localhost:7195/Categories/GetCategories", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        const categories = response.data;
        dispatch(categoriesSlice.actions.setCategoriesSuccess(categories));
      })
      .catch((error) => {
        dispatch(categoriesSlice.actions.setCategoriesFailure(error.message));
      });
  };
};

export default categoriesSlice.reducer;