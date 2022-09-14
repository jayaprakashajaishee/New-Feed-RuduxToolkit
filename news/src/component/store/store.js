import { configureStore } from "@reduxjs/toolkit";
import sourceReducer from "../reducers/sourceReducer";
import themeReducer from "../reducers/themeReducer";
import headlineReducer from "../reducers/headlineReducer";
import newsReducer from "../reducers/newsReducer";

const store = configureStore({
  reducer: {
    sources: sourceReducer,
    theme: themeReducer,
    headlines: headlineReducer,
    news: newsReducer,
  },
});

export default store;
