import { configureStore } from "@reduxjs/toolkit";

import ProductSliceReducer from "./productSlice/ProductSlice";
const store = configureStore({ reducer: ProductSliceReducer });

export default store;
