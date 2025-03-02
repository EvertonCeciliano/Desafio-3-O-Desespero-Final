import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import compareReducer from '../CompareStore/CompareSlice';
import wishlistReducer from '../WishlistStore/WishlistSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedCompareReducer = persistReducer(
  { ...persistConfig, key: 'compare' },
  compareReducer
);
const persistedWishlistReducer = persistReducer(
  { ...persistConfig, key: 'wishlist' },
  wishlistReducer
);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    compare: persistedCompareReducer,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['register'],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };