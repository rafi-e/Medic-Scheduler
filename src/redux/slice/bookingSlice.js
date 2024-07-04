import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingList: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking(state, action) {
      const newItem = action.payload;
      state.bookingList.push({
        id: newItem.id,
        name: newItem.name,
        address: newItem.address,
        time: newItem.time,
        date: newItem.date,
        image: newItem.image,
      });
    },

    removeBooking(state, action) {
      const id = action.payload;

      state.bookingList = state.bookingList.filter(
        (booking) => booking.id !== id
      );
    },
  },
});

export const BookingActions = bookingSlice.actions;
export default bookingSlice.reducer;
