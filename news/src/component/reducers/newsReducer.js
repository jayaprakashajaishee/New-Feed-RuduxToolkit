import { SHOW_NEWS } from "../constants/constants";

function newsReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_NEWS:
      return action.payload;
    default:
      return state;
  }
}

export default newsReducer;
