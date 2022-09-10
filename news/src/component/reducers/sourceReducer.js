import {
  SOURCE_REQUEST,
  SOURCE_FAIL,
  SOURCE_SUCCESS,
  SOURCE_FAV,
} from "../constants/constants";

function sourceReducer(state = {}, action) {
  switch (action.type) {
    case SOURCE_REQUEST:
      return { loading: true };
    case SOURCE_SUCCESS:
      return { loading: false, sources: action.payload };
    case SOURCE_FAIL:
      return { loading: false, error: action.payload };
    case SOURCE_FAV:
      return {
        ...state,
        sources: [
          ...state.sources.map((source) => {
            return {
              ...source,
              fav: source.id === action.payload ? !source.fav : source.fav,
            };
          }),
        ],
      };
    default:
      return state;
  }
}

export default sourceReducer;
