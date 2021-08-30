import { SET_CURRENT_USER } from "./types";
import usersData from "../data/users";

export const loginUser = userInfo => dispatch => {
    const isUserValid = usersData.filter(user => user.password === userInfo.password && user.email === userInfo.username);
    if(isUserValid.length > 0){
        // Set User to localstorage
        localStorage.setItem('user_data_cats_app', JSON.stringify(userInfo));
        dispatch(setCurrentUser(userInfo));
    }
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
     localStorage.removeItem('user_data_cats_app');
     // Set the current to an empty object which will also set authenticated is also false
     dispatch(setCurrentUser({}));
}
