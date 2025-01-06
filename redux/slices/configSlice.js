// configSlice.js
import { createSlice } from '@reduxjs/toolkit';

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
    },
    setInitialConfig: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateConfig, setInitialConfig } = configSlice.actions;
export default configSlice.reducer;