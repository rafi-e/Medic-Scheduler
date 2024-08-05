import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./slice/bookingSlice";

export const store = configureStore({
  reducer: {
    booking: bookingSlice
  },
});