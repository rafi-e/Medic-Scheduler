import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./slice/bookingSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    booking: bookingSlice,
    // auth: authSlice,
  },
});