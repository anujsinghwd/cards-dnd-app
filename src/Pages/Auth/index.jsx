import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions";
import { LoginForm } from "../../components";

const LoginPage = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);

    if(isAuthenticated) {
        window.location.href = '/dashboard';
      }

    const LoginUser = data => {
        dispatch(loginUser(data));    
    }

    return <LoginForm onSubmitFormData={LoginUser} />
}

export default LoginPage;
