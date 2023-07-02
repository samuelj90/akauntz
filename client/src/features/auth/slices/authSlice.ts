import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";

interface AuthState {
  user: User;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});
export default authSlice.reducer;
