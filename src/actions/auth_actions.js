import { SET_CURRENT_USER } from "./types";
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
// import jwt_decode from 'jwt-decode';

import usersData from "../data/users";

const API_URL = `http://localhost:8000`;

export const loginUser = userInfo => dispatch => {
    axios.post(`http://localhost:8000/user/login`, userInfo)
        .then(res => {
            // Save to localstorage
            const { token, user } = res.data;
            // Set Token to localstorage
            localStorage.setItem('user_data_cats_app_token', token);
            localStorage.setItem('user_data_cats_app_user', JSON.stringify(user));
            // Set Token to AuthHeader
            
            setAuthToken(token);
            // Set Current User
            dispatch(setCurrentUser(user));
        })
        .catch(err => {
            console.log(err.response.data);
            if(err.response.data?.detail) {
                alert(err.response.data?.detail);
            }
        });
};

// Set Logged In User
export const setCurrentUser = (userData) => {
    return {
        type: SET_CURRENT_USER,
        payload: userData
    }
}

 // Logout User
 export const logoutUser = () => dispatch => {
     // Remove the user from localstorage
     localStorage.removeItem('user_data_cats_app_token');
     localStorage.removeItem('user_data_cats_app_user');
     // Set the current to an empty object which will also set authenticated is also false
     dispatch(setCurrentUser({}));
}
