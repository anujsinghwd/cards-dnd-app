import { GET_HOME_PAGE_DATA, UPDATE_CARDS } from '../actions/types';

const defaultState = {
  homePageData: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_HOME_PAGE_DATA:
      return {
        ...state,
        homePageData: action.payload,
      };
    case UPDATE_CARDS:
      return {
        ...state
      }
    default:
      return state;
  }
};
