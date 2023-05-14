import axios from "axios";
import {
  SOURCE_REQUEST,
  SOURCE_SUCCESS,
  SOURCE_FAIL,
  SOURCE_FAV,
  SOURCE_SELECT,
  HEADLINE_REQUEST,
  HEADLINE_REQUEST_SUCCESS,
  HEADLINE_REQUEST_FAIL,
  HEADLINE_SELECT,
  SHOW_NEWS,
} from "../constants/constants";

const sourceFav = (id) => (dispatch) =>
  dispatch({ type: SOURCE_FAV, payload: id });

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
      //console.log(JSON.stringify(response.data));
      dispatch({
        type: HEADLINE_REQUEST_SUCCESS,
        payload: {
          ...response.data,
          name,
          articles: [
            ...response.data.articles.map((article) => {
              return { ...article, selected: false };
            }),
          ],
        },
      });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: HEADLINE_REQUEST_FAIL, payload: error });
    });
};

const selectHeadline = (headline) => (dispatch) => {
  dispatch({ type: HEADLINE_SELECT, payload: headline });
  dispatch({ type: SHOW_NEWS, payload: headline });
};

export { sourceFav, selectSource, selectHeadline };
