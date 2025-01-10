import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setInitialConfig } from '../redux/slices/configSlice';
import AppNavigator from '../navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
