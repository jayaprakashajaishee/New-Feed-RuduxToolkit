import {
  SOURCE_REQUEST,
  SOURCE_FAIL,
  SOURCE_SUCCESS,
  SOURCE_FAV,
  SOURCE_SELECT,
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
    case SOURCE_SELECT:
      return {
        ...state,
        sources: state.sources.map((source) =>
          source.id === action.payload
            ? { ...source, selected: true }
            : { ...source, selected: false }
        ),
      };
    default:
      return state;
  }
}

export default sourceReducer;
