import { configureStore } from "@reduxjs/toolkit";
import confReducer from "./components/ConferenceSlice";

const store = configureStore({
  reducer: {
    conference: confReducer,
  },
});

export default store;
