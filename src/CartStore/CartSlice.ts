import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData } from '../Components/ProductCard/Product';

export interface CartItem extends ProductData {
  quantity: number; // Adicionando quantidade ao item do carrinho
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductData>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // Se o item já existir no carrinho, aumente a quantidade
        existingItem.quantity += 1;
      } else {
        // Caso contrário, adicione o novo item com quantidade 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      // Remover o item com o ID correspondente
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      // Limpar o carrinho
      state.items = [];
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      // Aumentar a quantidade de um item específico
      const itemToIncrease = state.items.find(item => item.id === action.payload);
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      // Diminuir a quantidade de um item específico
      const itemToDecrease = state.items.find(item => item.id === action.payload);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
