import React, { Component } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 360px;
    margin: 40px;
    border: 2px solid blue;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-around;
    margin: 20px 10px;
    width: 70%;

    > input, button {
        margin: 5px 0;
    }

    > button {
        width: 100%;
        padding: 5px;
        font-size: 14px;
        align-self: center;
    }
`;

class Login extends Component {

    render(){
        return (
            <LoginContainer>
                <LoginForm action="submit">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <button>Login</button>
                </LoginForm>
            </LoginContainer>
        )
    }
}

export default Login;