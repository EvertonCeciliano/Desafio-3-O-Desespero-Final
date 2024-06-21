import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductData } from '../Components/ProductCard/Product'

export interface CartItem extends ProductData {
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductData>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemToIncrease = state.items.find(item => item.id === action.payload)
      if (itemToIncrease) {
        itemToIncrease.quantity += 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemToDecrease = state.items.find(item => item.id === action.payload)
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1
      }
    },
  },
})

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer
