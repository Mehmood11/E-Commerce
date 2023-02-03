import { createSlice } from "@reduxjs/toolkit";
const initialState: any = {
  favProduct: [],
};
const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: initialState,
  reducers: {
    favProductAction: (state, action) => {
      const payload = action.payload;
      let filteredFavArray: any;
      filteredFavArray = state.favProduct.findIndex(
        (item: any) => item?.id === payload?.id
      );
      filteredFavArray === -1
        ? state.favProduct.push(action.payload)
        : state.favProduct.splice(filteredFavArray, 1);
    },
  },
});

export const { favProductAction } = ProductSlice.actions;
export default ProductSlice.reducer;
