import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData } from '../Components/ProductCard/Product';

interface CompareState {
  items: ProductData[];
}

const initialState: CompareState = {
  items: [],
};

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    toggleCompare: (state, action: PayloadAction<ProductData>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else if (state.items.length < 4) {
        state.items.push(action.payload);
      }
    },
    removeFromCompare: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
    clearCompare: (state) => {
      state.items = [];
    },
  },
});

export const { toggleCompare, removeFromCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;
