import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './fetures/Taskslice'; // Fixed folder name typo (if needed)

export const store = configureStore({
  reducer: {
    tasks: taskReducer, // Directly importing the reducer
  },
});

export default store;
