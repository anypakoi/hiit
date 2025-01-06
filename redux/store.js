// store.js
import { configureStore } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import configReducer from './slices/configSlice';

// Configuración de persistencia
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Reducer persistido
const persistedConfigReducer = persistReducer(persistConfig, configReducer);

// Crear store
export const store = configureStore({
  reducer: {
    config: persistedConfigReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ]
      }
    })
});

// Persistor
export const persistor = persistStore(store);