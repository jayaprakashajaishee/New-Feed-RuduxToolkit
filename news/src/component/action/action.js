import axios from "axios";
import {
  SOURCE_REQUEST,
  SOURCE_SUCCESS,
  SOURCE_FAIL,
  CHANGE_THEME,
  SOURCE_FAV,
} from "../constants/constants";

const getSources = () => (dispatch) => {
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
      dispatch({ type: SOURCE_SUCCESS, payload: sources });
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

export { getSources, themeChange, sourceFav };
