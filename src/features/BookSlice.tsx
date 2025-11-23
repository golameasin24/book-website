import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  count: number; // <-- counter
}

const initialState: CartState = {
  cart: [],
  count: 0,

};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ============================
    // CART SYSTEM
    // ============================
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const item = state.cart.find((p) => p.id === action.payload.id);

      if (item) {
        item.quantity += 1;
        
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // ============================
    // COUNTER SYSTEM
    // ============================
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    resetCounter: (state) => {
      state.count = 0;
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  decreaseQuantity,
  increment,
  decrement,
  resetCounter
} = cartSlice.actions;

export default cartSlice.reducer;
