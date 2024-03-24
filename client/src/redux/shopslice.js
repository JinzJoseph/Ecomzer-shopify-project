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
    }, addUser: (state, action) => {
      state.userInfo = action.payload;
    }, 
    removeUser: (state) => {
      state.userInfo = null;
    },

  },
});

export const { addToCart,deleteItem,resetCart,increamentQuantity ,decrementQuantity,addUser,removeUser} = shopSlice.actions;
export default shopSlice.reducer;
