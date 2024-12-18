// configSlice.js
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  soundAlarm: "alarm clock",
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateConfig: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
      // Guardar en AsyncStorage cuando se actualiza
      AsyncStorage.setItem('appConfig', JSON.stringify(state));
    },
    setInitialConfig: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateConfig, setInitialConfig } = configSlice.actions;
export default configSlice.reducer;