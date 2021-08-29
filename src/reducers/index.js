import { combineReducers } from "redux";
import homeReducer from "./home_reducer";

export default combineReducers({
  home: homeReducer
});
