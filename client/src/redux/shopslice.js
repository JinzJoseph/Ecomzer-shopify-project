// shopslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const shopSlice = createSlice({
  name: "shopify",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem:(state,action)=>{
        state.productData=state.productData.filter((item)=>item.id!=action.payload)
    },
    resetCart:(state,action)=>{
        state.productData=[];

    },
    increamentQuantity:(state,action)=>{
        const item=state.productData.find((item)=>item.id===action.payload.id);
        if(item){
            item.quantity++;
        }
    },
    decrementQuantity:(state,action)=>{
        const item=state.productData.find((item)=>item.id===action.payload.id);
        if(item){
            item.quantity--;
        }
    }

  },
});

export const { addToCart,deleteItem,resetCart,increamentQuantity ,decrementQuantity} = shopSlice.actions;
export default shopSlice.reducer;
