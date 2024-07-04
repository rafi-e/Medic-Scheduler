// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const result = await auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
    const user = result.user;
    const { uid, email, displayName, photoURL } = user;
    return { uid, email, displayName, photoURL };
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isLoggedIn = false;
    });
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;