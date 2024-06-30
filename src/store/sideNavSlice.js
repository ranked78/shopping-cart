import { createSlice } from '@reduxjs/toolkit';

const sideNavSlice = createSlice({
  name: 'sideNavItems',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, update its quantity
        existingItem.quantity += action.payload.quantity || 1; // Add or default to 1
      } else {
        // If item does not exist, add it with default quantity
        state.push({
          ...action.payload,
          quantity: action.payload.quantity || 1  // Default to 1 if quantity is not provided
        });
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity} = sideNavSlice.actions;
export default sideNavSlice.reducer;
