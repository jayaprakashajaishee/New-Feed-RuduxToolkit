import { configureStore } from "@reduxjs/toolkit";
import sourceReducer from "../reducers/sourceReducer";
import themeReducer from "../reducers/themeReducer";
import headlineReducer from "../reducers/headlineReducer";

const store = configureStore({
  reducer: {
    sources: sourceReducer,
    theme: themeReducer,
    headlines: headlineReducer,
  },
});

export default store;
