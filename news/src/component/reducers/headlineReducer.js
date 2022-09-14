import {
  HEADLINE_REQUEST,
  HEADLINE_REQUEST_SUCCESS,
  HEADLINE_REQUEST_FAIL,
  HEADLINE_SELECT,
} from "../constants/constants";

function headlineReducer(state = {}, action) {
  switch (action.type) {
    case HEADLINE_REQUEST:
      return { loading: true };
    case HEADLINE_REQUEST_SUCCESS:
      return { loading: false, headlines: action.payload };
    case HEADLINE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    case HEADLINE_SELECT:
      return {
        ...state,
        headlines: {
          ...state.headlines,
          articles: state.headlines.articles.map((article) =>
            article.title === action.payload.title
              ? { ...article, selected: true }
              : { ...article, selected: false }
          ),
        },
      };
    default:
      return state;
  }
}

export default headlineReducer;
