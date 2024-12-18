import AppNavigator from '../navigation/AppNavigator';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setInitialConfig } from '../redux/slices/configSlice';

// Componente separado para la inicialización
const InitializeApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSavedConfig = async () => {
      try {
        const savedConfig = await AsyncStorage.getItem('appConfig');
        if (savedConfig) {
          dispatch(setInitialConfig(JSON.parse(savedConfig)));
        }
      } catch (error) {
        console.error('Error loading saved config:', error);
      }
    };

    loadSavedConfig();
  }, []);

  return <AppNavigator />;
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <InitializeApp />
      </PersistGate>
    </Provider>
  );
}
