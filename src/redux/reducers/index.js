import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer.js";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer
})

export default reducers