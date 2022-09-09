import { configureStore } from "@reduxjs/toolkit";
import sourceReducer from "../reducers/sourceReducer";

const store = configureStore({
  reducer: {
    sources: sourceReducer,
  },
});

export default store;
