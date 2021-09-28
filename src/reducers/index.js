import { combineReducers } from 'redux';
import homeReducer from './home_reducer';
import authReducer from './auth_reducer';
import snackbarReducer from './snackbar_reducer';

export default combineReducers({
  home: homeReducer,
  auth: authReducer,
  snackbar: snackbarReducer,
});
