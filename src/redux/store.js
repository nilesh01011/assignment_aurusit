import {
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { thunk } from 'redux-thunk';

// configuration Redux Persist
const persistConfig = {
  key: 'root',
  storage: storage,
};

// Created the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

// Initialize Redux Persist here
export const persistor = persistStore(store);
