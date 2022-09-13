import axios from "axios";
import {
  SOURCE_REQUEST,
  SOURCE_SUCCESS,
  SOURCE_FAIL,
  SOURCE_FAV,
  SOURCE_SELECT,
  CHANGE_THEME,
  HEADLINE_REQUEST,
  HEADLINE_REQUEST_SUCCESS,
  HEADLINE_REQUEST_FAIL,
} from "../constants/constants";

const getSources = () => (dispatch) => {
  let favIds = JSON.parse(localStorage.getItem("news-feed-favIds"));
  dispatch({ type: SOURCE_REQUEST });
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_SOURCES_API}?apiKey=${process.env.REACT_APP_API_KEY}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      let sources = response.data.sources.map((source, i) => {
        return { ...source, fav: false, selected: false };
      });
      dispatch({
        type: SOURCE_SUCCESS,
        payload: sources.map((source) =>
          favIds.includes(source.id) ? { ...source, fav: true } : source
        ),
      });
    })
    .catch(function (error) {
      dispatch({ type: SOURCE_FAIL, payload: error });
    });
};

const sourceFav = (id) => (dispatch) =>
  dispatch({ type: SOURCE_FAV, payload: id });

const themeChange = () => (dispatch) => {
  dispatch({ type: CHANGE_THEME });
};

const selectSource = (id, name) => (dispatch) => {
  dispatch({ type: SOURCE_SELECT, payload: id });
  dispatch({ type: HEADLINE_REQUEST });

  var axios = require("axios");

  var config = {
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&sources=${id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      dispatch({
        type: HEADLINE_REQUEST_SUCCESS,
        payload: { ...response.data, name },
      });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: HEADLINE_REQUEST_FAIL, payload: error });
    });
};

export { getSources, themeChange, sourceFav, selectSource };
