import { configureStore } from '@reduxjs/toolkit';
import sideNavReducer from './sideNavSlice';

const store = configureStore({
  reducer: {
    sideNavItems: sideNavReducer
  }
});

export default store;
