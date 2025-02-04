import { configureStore } from "@reduxjs/toolkit";
import departmentsReducer from "./departmentsSlice";

export const myStore = configureStore({
  reducer: {
    departments: departmentsReducer,
  },
});

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
