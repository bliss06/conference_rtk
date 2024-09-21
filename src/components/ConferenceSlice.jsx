import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

const conferenceSlice = createSlice({
  name: "conference",
  initialState,
  reducers: {
    fetchConferencesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchConferencesSuccess(state, action) {
      state.loading = false;
      state.rooms = action.payload;
    },
    fetchConferencesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addConference(state, action) {
      state.rooms.push(action.payload);
    },
    removeConference(state, action) {
      state.rooms = state.rooms.filter(
        (conference) => conference.id !== action.payload
      );
    },
  },
});

export const {
  fetchConferencesStart,
  fetchConferencesSuccess,
  fetchConferencesFailure,
  addConference,
  removeConference,
} = conferenceSlice.actions;

export default conferenceSlice.reducer;
