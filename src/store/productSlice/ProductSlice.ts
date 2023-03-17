import { createSlice } from "@reduxjs/toolkit";
const initialState: any = {
  favProduct: [],
  productList: [],
  increaseQuantity: 1,
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

    productListHandler: (state, action) => {
      // let filteredProductList = state.productList.findIndex(
      //   (item: any) => item?.id === payload?.id
      // );
      // if (filteredProductList === -1) {
      state.productList.push(action.payload);
      // }
    },
    increaseQuantity: (state, action) => {
      const payload = action.payload;
      const updatedItemToCart = [...state.productList];

      const indexNumber = state.productList.findIndex(
        (item: any) => item?.id === payload?.id
      );
      state.increaseQuantity = state.increaseQuantity + 1;

      updatedItemToCart[indexNumber] = {
        ...state.productList[indexNumber],
        totalQuantity: state.increaseQuantity,
      };

      state.productList = updatedItemToCart;
    },
    decreaseQuantity: (state, action) => {
      const payload = action.payload;
      const updatedItemToCart = [...state.productList];

      const indexNumber = state.productList.findIndex(
        (item: any) => item?.id === payload?.id
      );
      state.increaseQuantity = state.increaseQuantity - 1;

      updatedItemToCart[indexNumber] = {
        ...state.productList[indexNumber],
        totalQuantity: state.increaseQuantity,
      };

      state.productList = updatedItemToCart;
    },
  },
});

export const {
  favProductAction,
  productListHandler,
  increaseQuantity,
  decreaseQuantity,
} = ProductSlice.actions;
export default ProductSlice.reducer;
