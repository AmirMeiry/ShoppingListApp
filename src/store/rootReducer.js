import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import productsSlice from "./slices/products";

const rootReducer = combineReducers({
  products: productsSlice.reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
