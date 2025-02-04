import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://optirh-server.onrender.com/api/v1";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(`${API_URL}/departments/basic`);
  console.log(response.data);
  
  return response.data.data;
});

export type Department = {
  id: number;
  departmentName: string;
  description: string;
  director? : number;
  employees? : string;
  jobs? : string;
};

type DepartmentsState = {
  departments: Department[];
  loading: boolean;
};

const initialState: DepartmentsState = {
  departments: [],
  loading: false,
};

const usersSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Department[]>) => {
        console.log("Données stockées dans Redux :", action.payload);
        state.departments = action.payload;
        state.loading = false;
      })
  },
});

export default usersSlice.reducer;
