import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CartStore/CartSlice';
import wishlistReducer from '../WishlistStore/WishlistSlice';
import compareReducer from '../CompareStore/CompareSlice';
import contactReducer from '../ContactStore/ContactSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    contact: contactReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
