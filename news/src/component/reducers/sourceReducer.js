import {
  SOURCE_REQUEST,
  SOURCE_FAIL,
  SOURCE_SUCCESS,
} from "../constants/constants";

function sourceReducer(state = {}, action) {
  switch (action.type) {
    case SOURCE_REQUEST:
      return { loading: true };
    case SOURCE_SUCCESS:
      return { loading: false, sources: action.payload };
    case SOURCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default sourceReducer;
