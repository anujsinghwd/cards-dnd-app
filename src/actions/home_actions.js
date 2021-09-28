import { GET_HOME_PAGE_DATA, UPDATE_CARDS } from './types';
import axios from 'axios';
// Error handler
// import { handleServerError } from "../helpers/error_helper";
// Load Sample Data
import sampleItems from '../data/SampleItems';

export const getHomePageData = (user_id) => dispatch => {
  axios
    .get(`http://localhost:8000/user/${user_id}`)
    .then((res) => {
      dispatch({
        type: GET_HOME_PAGE_DATA,
        payload: JSON.parse(res.data.settings).length > 0 ? JSON.parse(res.data.settings) : sampleItems,
      });
    })
    .catch((err) => console.log(err));
};

export const updateCards = (id, data) => dispatch => {
  axios
    .put(`http://localhost:8000/user/${id}`, {"settings": JSON.stringify(data)})
    .then((res) => {
      dispatch({
        type: UPDATE_CARDS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
