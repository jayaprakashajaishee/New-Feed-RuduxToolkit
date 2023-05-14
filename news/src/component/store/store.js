import { configureStore } from "@reduxjs/toolkit";
import sourceReducer from "../reducers/sourceSlice"
import headlineReducer from "../reducers/headlineReducer";
import newsReducer from "../reducers/newsReducer";
import themeReducer from "../reducers/themeSlice"

const store = configureStore({
  reducer: {
    sources: sourceReducer,
    theme: themeReducer,
    headlines: headlineReducer,
    news: newsReducer,
  },
});

export default store;
