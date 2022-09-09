import axios from "axios";
import {
  SOURCE_REQUEST,
  SOURCE_SUCCESS,
  SOURCE_FAIL,
} from "../constants/constants";

const getSources = () => (dispatch) => {
  dispatch({ type: SOURCE_REQUEST });
  var config = {
    method: "get",
    url: "https://newsapi.org/v2/top-headlines/sources?apiKey=47bbe568e58b490887d7d76ca92c807e",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      dispatch({ type: SOURCE_SUCCESS, payload: response.data.sources });
    })
    .catch(function (error) {
      dispatch({ type: SOURCE_FAIL, payload: error });
    });
};

export { getSources };
