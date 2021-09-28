/* eslint-disable import/no-anonymous-default-export */
import { SET_SNACKBAR_SETTINGS } from '../actions/types';

const defaultState = {
  open: false,
  message: '',
  variant: 'info',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SNACKBAR_SETTINGS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
