import { CHANGE_THEME } from "../constants/constants";

function themeReducer(state = "light", action) {
  switch (action.type) {
    case CHANGE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}

export default themeReducer;
