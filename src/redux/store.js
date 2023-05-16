import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { employeeReducer } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, employeeReducer);

// configuration pour ignorer l'action "persist/PERSIST" de redux persist qui a des fonctions non sérialisables, retire donc l'erreur du middleware serializableStateInvariantMiddleware que redux toolkit génère 
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: ['persist/PERSIST']
  }
});

export const store = configureStore({
  reducer: {
    employee: persistedReducer,
  },
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);