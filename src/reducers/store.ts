import { configureStore } from '@reduxjs/toolkit'
import allReducers from '.';

export const Istore = configureStore({
  reducer: allReducers,
});
export type RootState = ReturnType<typeof Istore.getState>;

// store.subscribe(() => console.log(store.getState()));
