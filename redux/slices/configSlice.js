// configSlice.js
import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    // Configuraciones por defecto
    soundAlarm: 'alarm clock',

  },
  reducers: {
    // Método genérico para actualizar cualquier configuración
    updateConfig: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  }
});

export const { 
  updateConfig, 
} = configSlice.actions;
export default configSlice.reducer;