import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

export const myStore = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
