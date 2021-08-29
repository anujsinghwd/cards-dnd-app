import { GET_HOME_PAGE_DATA } from "./types";

// Error handler
// import { handleServerError } from "../helpers/error_helper";

// Load Sample Data
import sampleItems from '../data/SampleItems';

export const getHomePageData = () => {
    return {
    type: GET_HOME_PAGE_DATA,
    payload: sampleItems
    };
};
