import React,{ useState } from "react";
import PropTypes from 'prop-types';
import { LoginContainer, FormContainer } from "./Login";

const LoginForm = ({onSubmitFormData}) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const onInputChange = evt => {
        setState({...state, [evt.target.name]: evt.target.value});
    }

    const onSubmitForm = evt => {
        evt.preventDefault();
        if(state.email && state.password) {
            onSubmitFormData(state);
        }
    }

    return (
        <LoginContainer>
            <FormContainer>
                <form className="login-form" onSubmit={onSubmitForm}>
                    <input style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        display: 'inline-block',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxSizing: 'border-box'
                    }} type="text" placeholder="email" name="email" onChange={onInputChange} />
                    <input style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        display: 'inline-block',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxSizing: 'border-box'
                    }} type="password" placeholder="password" name="password" onChange={onInputChange} />
                    <button style={{
                        width: '100%',
                        backgroundColor: '#4CAF50',
                        color: '#FFFFFF',
                        padding: '14px 20px',
                        margin: '8px 0',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }} type="submit">Login</button>
                </form>
            </FormContainer>
        </LoginContainer>
    )
}

LoginForm.propTypes = {
    onSubmitFormData: PropTypes.func
};

export default LoginForm;
