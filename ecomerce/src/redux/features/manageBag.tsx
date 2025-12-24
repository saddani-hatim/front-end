import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id?: string;
  name: string;
  price: number;
  imageUrl: string;
  category?: string;
  brand?: string;
  rating?: number;
}

type BagState = {
  bag: Product[];
  wishlist: Product[];
  totalAmount: number;
  bagCount: number;
  wishlistCount: number;
};

const initialState: BagState = {
  bag: [],
  wishlist: [],
  totalAmount: 0,
  bagCount: 0,
  wishlistCount: 0,
};

export const slice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    emptyBag: () => {
      return initialState;
    },
    addToBag: (state, action: PayloadAction<Product>) => {
      state.bag.push(action.payload);
      state.bagCount = state.bag.length;
    },
    removeFromBag: (state, action: PayloadAction<Product>) => {
      const index = state.bag.findIndex(
        (item: Product) => item.name === action.payload.name
      );
      if (index !== -1) {
        state.bag.splice(index, 1);
        state.bagCount = state.bag.length;
      }
    },
    addPrice: (state, action: PayloadAction<number>) => {
      state.totalAmount += action.payload;
    },
    removePrice: (state, action: PayloadAction<number>) => {
      state.totalAmount -= action.payload;
    },
    addToWishlist: (state, action: PayloadAction<Product>) => {
      // Check if already in wishlist
      const exists = state.wishlist.find(
        (item: Product) => item.name === action.payload.name
      );
      if (!exists) {
        state.wishlist.push(action.payload);
        state.wishlistCount = state.wishlist.length;
      }
    },
    removeFromWishlist: (state, action: PayloadAction<Product>) => {
      const index = state.wishlist.findIndex(
        (item: Product) => item.name === action.payload.name
      );
      if (index !== -1) {
        state.wishlist.splice(index, 1);
        state.wishlistCount = state.wishlist.length;
      }
    },
  },
});

export const { 
  addToBag, 
  removeFromBag, 
  addPrice, 
  removePrice, 
  emptyBag,
  addToWishlist,
  removeFromWishlist 
} = slice.actions;

export default slice.reducer;
