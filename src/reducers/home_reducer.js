import { GET_HOME_PAGE_DATA } from "../actions/types";

const defaultState = {
    homePageData: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
      case GET_HOME_PAGE_DATA:
          return {
              ...state,
              homePageData: action.payload
          }
      default:
        return state;
    }
};
