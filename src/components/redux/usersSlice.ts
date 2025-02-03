import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addUser = createAsyncThunk("users/addUser", async (user: { name: string; email: string }) => {
  const response = await axios.post(API_URL, user);
  return response.data;
});

export const updateUser = createAsyncThunk("users/updateUser", async (user: { id: number; name: string; email: string }) => {
  const response = await axios.put(`${API_URL}/${user.id}`, user);
  return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

type User = {
  id: number;
  name: string;
  email: string;
};

type UsersState = {
  users: User[];
  loading: boolean;
};

const initialState: UsersState = {
  users: [],
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
