import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import locationReducer from "./locationReducer";

export default combineReducers({
  theme: themeReducer,
  location: locationReducer,
});
