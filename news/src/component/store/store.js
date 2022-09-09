import { configureStore } from "@reduxjs/toolkit";
import sourceReducer from "../reducers/sourceReducer";
import themeReducer from "../reducers/themeReducer";

const store = configureStore({
  reducer: {
    sources: sourceReducer,
    theme: themeReducer,
  },
});

export default store;
