import {
  HEADLINE_REQUEST,
  HEADLINE_REQUEST_SUCCESS,
  HEADLINE_REQUEST_FAIL,
} from "../constants/constants";

function headlineReducer(state = {}, action) {
  switch (action.type) {
    case HEADLINE_REQUEST:
      return { loading: true };
    case HEADLINE_REQUEST_SUCCESS:
      return { loading: false, headlines: action.payload };
    case HEADLINE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default headlineReducer;
