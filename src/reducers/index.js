import { combineReducers } from "redux";
import homeReducer from "./home_reducer";
import authReducer from "./auth_reducer";

export default combineReducers({
  home: homeReducer,
  auth: authReducer
});
