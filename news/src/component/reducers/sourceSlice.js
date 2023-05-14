import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

const getSources = createAsyncThunk("sources/getSources", () => {
  let favIds = JSON.parse(localStorage.getItem("news-feed-favIds"));
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_SOURCES_API}?apiKey=${process.env.REACT_APP_API_KEY}`,
    headers: {},
  };
  return axios(config).then(function (response) {
    let sources = response.data.sources.map((source, i) => {
      return { ...source, fav: false, selected: false };
    });
    return sources.map((source) =>
      favIds.includes(source.id) ? { ...source, fav: true } : source
    );
  });
});

const sourceSlice = createSlice({
  name: "sources",
  initialState,
  reducers: {
    selectSource: (state, action) => {
      state.sources.map((source) =>
        source.id === action.payload.id
          ? (source.selected = true)
          : (source.selected = false)
      );
    },
    favSource: (state, action) => {
        state.sources.map((source) =>
        source.id === action.payload
          ? (source.fav = !source.fav)
          : (source)
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSources.fulfilled, (state, action) => {
      state.loading = false;
      state.sources = action.payload;
    });
    builder.addCase(getSources.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default sourceSlice.reducer;
export { getSources };
export const { selectSource, favSource } = sourceSlice.actions;
